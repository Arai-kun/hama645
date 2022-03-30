let mongoose = require('mongoose');
let Twitter = require('../models/twitter');
let User = require('../models/user');
let Log = require('../models/log');
let Retweet = require('../models/retweet');
let Retweeted = require('../models/retweeted');
let Rate = require('../models/rate');
const { TwitterClient } = require('twitter-api-client');
const Queue = require('promise-queue');
const queue = new Queue();
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
  console.log('[AR] Successed connecting to DB');
  main();
});

async function main(){

    while(1){
        console.log('[AR] Active loop autoRetweet');
        const _sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
        await _sleep(1000 * 5);

        await autoRetweet();
    }
}