let mongoose = require('mongoose');
let Twitter = require('../models/twitter');
let User = require('../models/user');
let Dm = require('../models/dm');
let Log = require('../models/log');
let Special = require('../models/special');
let Rate = require('../models/rate');
let Lock = require('../models/lock');
const { TwitterClient } = require('twitter-api-client');
const sendgrid = require('@sendgrid/mail');
require('dotenv').config();

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

mongoose.connect(
    `mongodb://localhost:27017/${process.env.DB_NAME}?authSource=admin`,
    {
        useNewUrlParser: true,
        user: 'admin',
        pass: process.env.DB_PW
    }
);
let db = mongoose.connection;
db.once('open', () => {
  console.log('Successed connecting to DB');
  main();
});

async function main(){
    while(1){
        console.log('Active loop detectDMrequest');
        const _sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
        await _sleep(1000 * 5);

        await detectDMRequest();
    }
}

async function detectDMRequest(){
	try {
		console.log('Detect DM request start!');
		let users = await User.find({}).exec();
		for(let user of users){
			let twitters = await Twitter.find({email: user.email, authorized: true}).exec();
			//log(`[${user.email}] ` + twitters.map(twitter => twitter.screen_name));
			for(let twitter of twitters){
				try {
					console.log(`Start ${twitter.screen_name}`);
					let rate = await Rate.findOne({screen_name: twitter.screen_name, kind: 'friendsIds'}).exec();
					if(!rate){
						await Rate.create({
							screen_name: twitter.screen_name,
							latest_request_time: `${Date.now()}`,
							kind: 'friendsIds'
						});
					}
					else{
						let diff = Date.now() - Number(rate.latest_request_time);
						const _sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
						if( 0 <= diff && diff < (60 * 1000)){
							console.log(`Wait ${(60 * 1000) - diff} ms (friendsIds)...`);
							await _sleep((60 * 1000) - diff);
						}
						else if(diff < 0){
							console.log(`Wait ${(60 * 1000)} ms (friendsIds)...`);
							await _sleep((60 * 1000));
						}
						else{
							// No wait
						}
						rate.latest_request_time = `${Date.now()}`;
						await rate.save();
					}
					/*
					if(rate.latest_request_time){
						//let diff = (Date.now() - (new Date().getTimezoneOffset() * 60 * 1000)) - Number(twitter.latest_request_time);
						let diff = Date.now() - Number(rate.latest_request_time);
						const _sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
						if( 0 <= diff && diff < (60 * 1000)){
							log(`Wait ${(60 * 1000) - diff} ms ...`);
							await _sleep((60 * 1000) - diff);
						}
						else if(diff < 0){
							log(`Wait ${(60 * 1000)} ms ...`);
							await _sleep((60 * 1000));
						}
						else{
							// No wait
						}
					}
					rate.latest_request_time = `${Date.now()}`;
					await rate.save();*/

					const twitterClient = new TwitterClient({
						apiKey: process.env.API_KEY,
						apiSecret: process.env.API_SECRET,
						accessToken: twitter.oauth_token,
						accessTokenSecret: twitter.oauth_token_secret
					});

					let ids = [];
					let cursor = -1;
					do {
						/* Rate limit 15 per 15 min (user). Danger more than 5000 follows*/
						let response = await twitterClient.accountsAndUsers.friendsIds({cursor: cursor, stringify_ids: true});
						response['ids'].forEach(id => {
								ids.push(id);
						});
						cursor = response['next_cursor'];
					}
					while(cursor !== 0);
					
					/* Update friends */
					await Twitter.updateOne({email: twitter.email, screen_name: twitter.screen_name}, {$set: {friendIds: ids}}).exec();

					/* Rate limit automatically cleared */
					let response = await twitterClient.directMessages.eventsList();
					if(response.events.length !== 0){
						/*let data;
						for(let i = 0; i < response.events.length; i++){
							data = response.events[i];
							if(data['type'] === 'message_create'){
								log(`Found message_create index: ${i}`);
								break;
							}
						}*/

						let dms = await Dm.find({email: user.email, screen_name: twitter.screen_name}).exec();
						if(dms.length === 0){
							/* Initial => All save */
							for(let data of response.events){
								await Dm.create({
									email: user.email, 
									screen_name: twitter.screen_name,
									id: data['id'],
									created_timestamp: data['created_timestamp'],
									sender_id: data['message_create']['sender_id'],
									recipient_id: data['message_create']['target']['recipient_id'],
									text: data['message_create']['message_data']['text'],
								});
							}
						}
						else{
							/* If sender, ignore. Then data updates only */
							/* Extract the newest data from DB */
							let dm = dms.find(dm => Math.max.apply(null, dms.map(dm => Number(dm.created_timestamp))) === Number(dm.created_timestamp));
							//console.log(dm);
							/* Extract data which there is not in DB */
							let new_data = response.events.filter(dm => !(dms.map(dm => dm.id)).includes(dm['id']));
							//console.log(new_data);
							/* Extract the newest data from new data */
							//let data = new_data.filter(dm => Math.max(new_data.map(dm => Number(dm['created_timestamp']))) === Number(dm['created_timestamp']));
							if(new_data.length !== 0){
								/* Extract the newest data from new data */
								let data = new_data[0];
								//console.log(data);
								if(twitter.user_id !== data['message_create']['sender_id']){
									if(dm.id !== data['id'] && Number(dm.created_timestamp) < Number(data['created_timestamp'])){
										if(ids.find(id => id === data['message_create']['sender_id']) === undefined){
											/* DM Request */
											console.log('***** Detect Request DM! *****');
											await Log.create({
												email: user.email,
												timestamp: `${Date.now()}`,
												screen_name: twitter.screen_name,
												event: 1
											});
											await sendgrid.send({
												to: user.email,
												from: 'noreply@eggraise100.de',
												subject: '【通知】Twitter ツール',
												html: `<p>@${twitter.screen_name} にDMリクエストにて問い合わせが来ましたのでご対応よろしくお願いします。</p><p>問い合わせは以下のリンクから開いて対応してください。</p><p>${process.env.SERVER_URL}/home/dm/${twitter.screen_name}/${data['message_create']['sender_id']}</p>`
											});
										}
										else{
											/* New DM */
											let special = await Special.findOne({user_id: data['message_create']['sender_id']}).exec();
											if(!special){
												console.log('Get new DM');
												await Log.create({
													email: user.email,
													timestamp: `${Date.now()}`,
													screen_name: twitter.screen_name,
													event: 2
												});
											}
											else{
												console.log('Get new special DM');
												await Log.create({
													email: user.email,
													timestamp: `${Date.now()}`,
													screen_name: twitter.screen_name,
													event: 3
												});
												await sendgrid.send({
													to: user.email,
													from: 'noreply@eggraise100.de',
													subject: '【特殊通知】Twitter ツール',
													html: `<p>@${twitter.screen_name} に被り案件として通知されました。</p><p>問い合わせは以下のリンクから開いて対応してください。</p><p>${process.env.SERVER_URL}/home/log</p>`
												});
											}
										}
									}
								}
								for(let data of new_data){
									await Dm.create({
										email: user.email, 
										screen_name: twitter.screen_name,
										id: data['id'],
										created_timestamp: data['created_timestamp'],
										sender_id: data['message_create']['sender_id'],
										recipient_id: data['message_create']['target']['recipient_id'],
										text: data['message_create']['message_data']['text']
									});
								}
							}
							await Dm.findOneAndDelete({email: user.email, screen_name: twitter.screen_name, id: '0'}).exec();
						}
					}
					else{
						/* Case that the account receives DM for the first time or spent for 30 days */
						console.log('Detect events null account');
						let dms = await Dm.find({email: user.email, screen_name: twitter.screen_name}).exec();
						if(dms.length === 0){
							await Dm.create({
								email: user.email, 
								screen_name: twitter.screen_name,
								id: '0',
								created_timestamp: `${Date.now()}`,
								send_id: '',
								recipient_id: '',
								text: ''
							});
						}
					}
				}
				catch(error){
					/* Temporary lock may happen */
					if(('statusCode' in error) && ('data' in error)){
						console.log(error.data);
						console.log(error.data.errors);
						console.log((error.data.errors)[0]);
						if(error.statusCode === 403 && (error.data.errors)[0].code === 326){
							try {
								let lock = await Lock.findOne({email: twitter.email, screen_name: twitter.screen_name}).exec();
								if(!lock){
									await sendgrid.send({
										to: 'koki.alright@gmail.com',
										from: 'noreply@eggraise100.de',
										subject: '【Lock通知】Twitter ツール',
										html: `<p>@${twitter.screen_name} が一時凍結されている恐れがあります。</p><p>解消していただくか、本アプリから削除していただくことを推奨します</p>`
									});
									await Lock.create({email: twitter.email, screen_name: twitter.screen_name});
								}
							}
							catch(e){
								console.log(JSON.stringify(e));
							}
						}
					}

					console.log(JSON.stringify(error));
				}
			}
		}
		console.log('Detect DM request completed!');
	}
	catch(error){
		console.log('Critical Error!');
		console.log(error);
		return;
	}
}
