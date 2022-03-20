let mongoose = require('mongoose');
let Twitter = require('../models/twitter');
let User = require('../models/user');
let Log = require('../models/log');
let Follow = require('../models/follow');
let Followed = require('../models/followed');
let Rate = require('../models/rate');
const { TwitterClient } = require('twitter-api-client');
require('dotenv').config();

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
        console.log('Active loop autoFollow');
        const _sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
        await _sleep(1000 * 5);

        await autoFollow();
    }
}

async function autoFollow(){
	try{
		console.log('Auto Follow start!');
		let users = await User.find({}).exec();
		await Promise.all(users.map(async user => {
			console.log(`${user.email} 's turn`);
			let follows = await Follow.find({email: user.email}).exec();
			await Promise.all(follows.map(async follow => {
				let followeds = await Followed.find({email: user.email, screen_name: follow.screen_name}).exec();
				const now = new Date();
				const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
				followeds = followeds.filter(followed => today.getTime() <= Number(followed.timestamp) && Number(followed.timestamp) < (today.getTime() + 24 * 60 * 60 * 1000));
				if(followeds.length > follow.count_max){
					console.log('Exceed set count_max: ' + follow.count_max);
				}
				else{
					let twitter = await Twitter.findOne({email: user.email, screen_name: follow.screen_name}).exec();
					console.log(`${twitter.screen_name} in ${twitter.email} start`);
					const twitterClient = new TwitterClient({
						apiKey: process.env.API_KEY,
						apiSecret: process.env.API_SECRET,
						accessToken: twitter.oauth_token,
						accessTokenSecret: twitter.oauth_token_secret
					});
					follow.status_now = follow.status;
					await follow.save();
					switch(follow.status_now){
						case 0:
							console.log('In vacance');
							break;
						case 1: {
							/* Search and follow */
							console.log('Start searching and follow')
							/* Rate 1 req per 5 sec */
							let response = await twitterClient.tweets.search({q: follow.keyword, count: 100});
							let searched_users = response.statuses.map(searched_user => {
								return {user_id: searched_user.user.id_str, screen_name: searched_user.user.screen_name};
							});
							searched_users = searched_users.filter(el => !twitter.friendIds.includes(el.user_id));

							for(let searched of searched_users){
								/* e.g. min:2 max: 15 */
								let wait = Math.floor(Math.random() * (follow.range_max - follow.range_min) + follow.range_min);
								console.log(`Wait ${wait} min ....`);
								const _sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
								await _sleep(wait * 60 * 1000);

								try {
									let response2 = await twitterClient.accountsAndUsers.friendshipsCreate({user_id: searched.user_id});
									twitter.friendIds.push(response2.id_str);
									await twitter.save();
									console.log(`Success that ${follow.screen_name} follows ${response2.screen_name}`);
									await Followed.create({
										email: follow.email,
										screen_name: follow.screen_name,
										timestamp: `${Date.now()}`,
										followed_user_id: response2.id_str
									});
									await Log.create({
										email: follow.email,
										timestamp: `${Date.now()}`,
										screen_name: follow.screen_name,
										event: 4,
										partner_screen_name: response2.screen_name
									});

								}
								catch(error){
									console.log(JSON.stringify(error));
								}
							}



							break;
						}
						case 2: {
							/* Follow my followers */
							console.log('Start follow my followers')
							let ids = [];
							let cursor = -1;
							let rate = await Rate.findOne({screen_name: follow.screen_name}).exec();
							if(!rate){
								await Rate.create({
									screen_name: follow.screen_name,
									latest_request_time: `${Date.now()}`
								});
							}
							else{
								let diff = Date.now() - Number(rate.latest_request_time);
								const _sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
								if( 0 <= diff && diff < (60 * 1000)){
									console.log(`Wait ${(60 * 1000) - diff} ms ...`);
									await _sleep((60 * 1000) - diff);
								}
								else if(diff < 0){
									console.log(`Wait ${(60 * 1000)} ms ...`);
									await _sleep((60 * 1000));
								}
								else{
									// No wait
								}
								rate.latest_request_time = `${Date.now()}`;
								await rate.save();
							}

							do {
								/* Rate limit 15 per 15 min (user). Danger more than 5000 follows */
								let response = await twitterClient.accountsAndUsers.followersIds({cursor: cursor, stringify_ids: true});
								response.ids.forEach(id => {
									ids.push(id);
								});
								cursor = response.next_cursor;
							}
							while(cursor !== 0);
							ids = ids.filter(id => !twitter.friendIds.includes(id));
							for(let id of ids){
								/* e.g. min:2 max: 15 */
								let wait = Math.floor(Math.random() * (follow.range_max - follow.range_min) + follow.range_min);
								console.log(`Wait ${wait} min ....`);
								const _sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
								await _sleep(wait * 60 * 1000);

								try {
									let response2 = await twitterClient.accountsAndUsers.friendshipsCreate({user_id: id});
									twitter.friendIds.push(response2.id_str);
									await twitter.save();
									console.log(`Success that ${follow.screen_name} follows ${response2.screen_name}`);
									await Followed.create({
										email: follow.email,
										screen_name: follow.screen_name,
										timestamp: `${Date.now()}`,
										followed_user_id: response2.id_str
									});
									await Log.create({
										email: follow.email,
										timestamp: `${Date.now()}`,
										screen_name: follow.screen_name,
										event: 5,
										partner_screen_name: response2.screen_name
									});

								}
								catch(error){
									console.log(JSON.stringify(error));
								}
							}

							break;
						}
						case 3: {
							/* Both */
							console.log('Start Both');
							/* Rate 1 req per 5 sec */
							let response = await twitterClient.tweets.search({q: follow.keyword, count: 100});
							let ids = response.statuses.map(searched_user => searched_user.user.id_str);
							let rate = await Rate.findOne({screen_name: follow.screen_name}).exec();
							if(!rate){
								await Rate.create({
									screen_name: follow.screen_name,
									latest_request_time: `${Date.now()}`
								});
							}
							else{
								let diff = Date.now() - Number(rate.latest_request_time);
								const _sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
								if( 0 <= diff && diff < (60 * 1000)){
									console.log(`Wait ${(60 * 1000) - diff} ms ...`);
									await _sleep((60 * 1000) - diff);
								}
								else if(diff < 0){
									console.log(`Wait ${(60 * 1000)} ms ...`);
									await _sleep((60 * 1000));
								}
								else{
									// No wait
								}
								rate.latest_request_time = `${Date.now()}`;
								await rate.save();
							}

							let cursor = -1;
							do {
								/* Rate limit 15 per 15 min (user). Danger more than 5000 follows*/
								let response2 = await twitterClient.accountsAndUsers.followersIds({cursor: cursor, stringify_ids: true});
								response2.ids.forEach(id => {
									if(!ids.includes(id)){
										ids.push(id);
									}
								});
								cursor = response2.next_cursor;
							}
							while(cursor !== 0);
							ids = ids.filter(id => !twitter.friendIds.includes(id));

							for(let id of ids){
								/* e.g. min:2 max: 15 */
								let wait = Math.floor(Math.random() * (follow.range_max - follow.range_min) + follow.range_min);
								console.log(`Wait ${wait} min ....`);
								const _sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
								await _sleep(wait * 60 * 1000);

								try {
									let response3 = await twitterClient.accountsAndUsers.friendshipsCreate({user_id: id});
									twitter.friendIds.push(response3.id_str);
									await twitter.save();
									console.log(`Success that ${follow.screen_name} follows ${response3.screen_name}`);
									await Followed.create({
										email: follow.email,
										screen_name: follow.screen_name,
										timestamp: `${Date.now()}`,
										followed_user_id: response3.id_str
									});
									await Log.create({
										email: follow.email,
										timestamp: `${Date.now()}`,
										screen_name: follow.screen_name,
										event: 6,
										partner_screen_name: response3.screen_name
									});

								}
								catch(error){
									console.log(JSON.stringify(error));
								}
							}
							

							break;
						}
						default:
							break;
					}
				}
			}));
		}));
		console.log('Auto Follow complete!');
	}
	catch(error){
		console.log('**Critical Error! Content: ' + JSON.stringify(error));
		return;
	}
}