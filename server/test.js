let mongoose = require('mongoose');
let Twitter = require('./models/twitter');
let User = require('./models/user');
let Dm = require('./models/dm');
const { TwitterClient } = require('twitter-api-client');

require('dotenv').config();

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


//receiveDM();
//sendDM();
//getFriends();

async function main(){
    while(1){
        console.log('Active loop');
        const _sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
        await _sleep(1000 * 5);

        await detectDMRequest();
    }
}

async function sendDM(){
    try{
        let twitter = await Twitter.findOne({screen_name: 'ka01_7'}).exec();
        const twitterClient = new TwitterClient({
            apiKey: process.env.API_KEY,
            apiSecret: process.env.API_SECRET,
            accessToken: twitter.oauth_token,
            accessTokenSecret: twitter.oauth_token_secret
        });
        let response = await twitterClient.directMessages.eventsNew({
            event: {
                type: 'message_create',
                message_create: {
                    target: {
                        recipient_id: '2239265863'
                    },
                    message_data: {
                        text: 'No weekend!'
                    }
                }
            }
        });

        console.log(response)
    }
    catch(error){
        console.log(error);
    }
}

async function receiveDM(){
    try {
        let twitter = await Twitter.findOne({screen_name: 'mismoov'}).exec();
        const twitterClient = new TwitterClient({
            apiKey: process.env.API_KEY,
            apiSecret: process.env.API_SECRET,
            accessToken: twitter.oauth_token,
            accessTokenSecret: twitter.oauth_token_secret
        });
        let response = await twitterClient.directMessages.eventsList();
        console.log(response);
        console.log(response.events[0].message_create)
    }
    catch(error){
        console.log(error);
    }
}

async function getFriends(){
    try {
        let twitter = await Twitter.findOne({screen_name: 'mismoov'}).exec();
        const twitterClient = new TwitterClient({
            apiKey: process.env.API_KEY,
            apiSecret: process.env.API_SECRET,
            accessToken: twitter.oauth_token,
            accessTokenSecret: twitter.oauth_token_secret
        });
        let response = await twitterClient.accountsAndUsers.friendsIds();
        console.log(response);
    }
    catch(error){
        console.log(error);
    }
}

async function detectDMRequest(){
	try {
		let users = await User.find({}).exec();
		for(let user of users){
			let twitters = await Twitter.find({email: user.email, authorized: true}).exec();
			for(let twitter of twitters){
				if(!twitter.latest_request_time){
					/* Initial */	
					twitter.latest_request_time = `${Date.now() - (new Date().getTimezoneOffset() * 60 * 1000)}`;
					await twitter.save();
				}
				else{
					let diff = (Date.now() - (new Date().getTimezoneOffset() * 60 * 1000)) - Number(twitter.latest_request_time);
					if( diff < (60 * 1000)){
						console.log(`Wait ${(60 * 1000) - diff}ms ...`);
						const _sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
						await _sleep((60 * 1000) - diff);
					}
				}

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
				let data;
				for(let i = 0; i < response.events.length; i++){
					data = response.events[i];
					if(data['type'] === 'message_create'){
						console.log(`Found message_create index: ${i}`);
						break;
					}
				}

				let dm = await Dm.findOne({screen_name: twitter.screen_name}).exec();
				if(!dm){
					/* Initial */
					await Dm.create({
						screen_name: twitter.screen_name,
						id: data['id'],
						created_timestamp: data['created_timestamp'],
					});
				}
				else{
					if(dm.id !== data['id'] && Number(dm.created_timestamp) < Number(data['created_timestamp'])){
						/* New DM */
						console.log('New DM');
						if(ids.find(id => id === Number(data['message_create']['sender_id'])) === undefined){
							/* Request DM */
							console.log('***** Detect Request DM! *****');
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
			console.log(error);
	}
}

