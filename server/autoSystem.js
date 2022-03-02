let mongoose = require('mongoose');
let Twitter = require('./models/twitter');
let User = require('./models/user');
let Dm = require('./models/dm');
let Log = require('./models/log');
let Special = require('./models/special');
const { TwitterClient } = require('twitter-api-client');
const sendgrid = require('@sendgrid/mail');
require('dotenv').config();

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

mongoose.connect(
    'mongodb://localhost:27017/hama645?authSource=admin',
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
				if(twitter.latest_request_time){
					//let diff = (Date.now() - (new Date().getTimezoneOffset() * 60 * 1000)) - Number(twitter.latest_request_time);
					let diff = Date.now() - Number(twitter.latest_request_time);
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
				twitter.latest_request_time = `${Date.now()}`;
				await twitter.save();

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
				//console.log(response.events[0].message_create);
				let data;
				for(let i = 0; i < response.events.length; i++){
					data = response.events[i];
					if(data['type'] === 'message_create'){
						log(`Found message_create index: ${i}`);
						break;
					}
				}

				let dm = await Dm.findOne({email: user.email, screen_name: twitter.screen_name}).exec();
				if(!dm){
					/* Initial */
					await Dm.create({
						email: user.email, 
						screen_name: twitter.screen_name,
						id: data['id'],
						created_timestamp: data['created_timestamp'],
					});
				}
				else{
					/* If sender, ignore. Then data updates only */
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
									to: process.env.EMAIL,
									from: 'noreply@enginestarter.nl',
									subject: '【通知】タイトル未定',
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
										to: 'koki.alright@gmail.com',
										from: 'noreply@enginestarter.nl',
										subject: '【特殊通知】タイトル未定',
										html: `<p>@${special.screen_name} から@${twitter.screen_name} にDMが届きました</p>`
									});
								}
							}
						}
					}
					dm.id = data['id'];
					dm.created_timestamp = data['created_timestamp'];
					await dm.save();
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

