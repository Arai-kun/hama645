let mongoose = require('mongoose');
let Twitter = require('../models/twitter');
const { TwitterClient } = require('twitter-api-client');
require('dotenv').config();

main();

async function main(){
    try{
        let twitter = await Twitter.findOne({screen_name: 'ka01_7'}).exec();
        const twitterClient = new TwitterClient({
            apiKey: process.env.API_KEY,
            apiSecret: process.env.API_SECRET,
            accessToken: twitter.oauth_token,
            accessTokenSecret: twitter.oauth_token_secret
        });
        
    }
    catch(error){
        console.log(error);
    }
}

