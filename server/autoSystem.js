let mongoose = require('mongoose');
let Twitter = require('./models/twitter');
let User = require('./models/user');
let Dm = require('./models/dm');
let Log = require('./models/log');
let Special = require('./models/special');
let Rate = require('./models/rate');
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
        console.log('Active loop');
        const _sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
        await _sleep(1000 * 5);

        await detectDMRequest();
    }
}

async function detectDMRequest(){
	try {
		let users = await User.find({}).exec();
		for(let user of users){
			let twitters = await Twitter.find({email: user.email, authorized: true}).exec();
			for(let twitter of twitters){
				log(`Start ${twitter.screen_name}`);
				let rate = await Rate.findOne({screen_name: twitter.screen_name}).exec();
				if(!rate){
					await Rate.create({
						screen_name: twitter.screen_name,
						latest_request_time: `${Date.now()}`
					});
				}
				else{
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
					let response = await twitterClient.accountsAndUsers.friendsIds({cursor: cursor});
					response['ids'].forEach(id => {
							ids.push(id);
					});
					cursor = response['next_cursor'];
				}
				while(cursor !== 0);
				//console.log(ids);

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
						let dm = dms.filter(dm => Math.max(dms.map(dm => Number(dm.created_timestamp))) === Number(dm.created_timestamp));
						console.log(dm);
						/* Extract data which there is not in DB */
						let new_data = response.events.filter(dm => !(dms.map(dm => dm.id)).includes(dm['id']));
						console.log(new_data);
						/* Extract the newest data from new data */
						let data = new_data.filter(dm => Math.max(new_data.map(dm => Number(dm['created_timestamp']))) === Number(dm['created_timestamp']));
						console.log(data);

						if(twitter.user_id !== data['message_create']['sender_id']){
							if(dm.id !== data['id'] && Number(dm.created_timestamp) < Number(data['created_timestamp'])){
								if(ids.find(id => id === Number(data['message_create']['sender_id'])) === undefined){
									/* DM Request */
									log('***** Detect Request DM! *****');
									await Log.create({
										email: user.email,
										timestamp: `${Date.now()}`,
										screen_name: twitter.screen_name,
										event: 1
									});
									await sendgrid.send({
										to: user.email,
										from: 'noreply@enginestarter.nl',
										subject: '【通知】DM管理ツール',
										html: `<p>@${twitter.screen_name} にDMリクエストが届きました</p>`
									});
								}
								else{
									/* New DM */
									let special = await Special.findOne({user_id: data['message_create']['sender_id']}).exec();
									if(!special){
										log('Get new DM');
										await Log.create({
											email: user.email,
											timestamp: `${Date.now()}`,
											screen_name: twitter.screen_name,
											event: 2
										});
									}
									else{
										log('Get new special DM');
										await Log.create({
											email: user.email,
											timestamp: `${Date.now()}`,
											screen_name: twitter.screen_name,
											event: 3
										});
										await sendgrid.send({
											to: user.email,
											from: 'noreply@enginestarter.nl',
											subject: '【特殊通知】DM管理ツール',
											html: `<p>@${special.screen_name} から@${twitter.screen_name} にDMが届きました</p>`
										});
									}
								}
							}
						}
						for(let data of new_data){
							dms.push({
								id: data['id'],
								created_timestamp: data['created_timestamp'],
								sender_id: data['message_create']['sender_id'],
								recipient_id: data['message_create']['target']['recipient_id'],
								text: data['message_create']['message_data']['text']
							});
						}
						await dms.save();

						await Dm.findOneAndDelete({email: user.email, screen_name: twitter.screen_name, id: '0'}).exec();
					}
				}
				else{
					/* Case that the account receives DM for the first time or spent for 30 days */
					log('Detect events null account');
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
		}
	}
	catch(error){
			log(error);
	}
}

function log(str) {
	const now = new Date();
	console.log(`${now.toString()}: ` + str);
}

