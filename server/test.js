let mongoose = require('mongoose');
let Twitter = require('./models/twitter');
const { TwitterClient } = require('twitter-api-client');

require('dotenv').config();mongoose.connect(
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
});



//receiveDM();
//sendDM();
getFriends();

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

