const { Worker } = require('worker_threads');
const worker_detectDMrequest = new Worker('./detectDMrequest.js');
const worker_autoFollow = new Worker('./autoFollow.js');
const worker_autoRetweet = new Worker('./autoRetweet.js');

let mongoose = require('mongoose');
let Follow = require('../models/follow');
let Retweet = require('../models/retweet');
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
  console.log('[MAIN] Successed connecting to DB');
});

process.on('SIGINT', async () => {
    try {
        await Follow.updateMany({}, {$set: {status_now: 0}}).exec();
        await Retweet.updateMany({}, {$set: {status_now: 0}}).exec();
        console.log('[MAIN] All status_now reset');
        process.exit(0);
    } 
    catch(e){
        console.log(`[MAIN] ${e}`);
        process.exit(1);
    }
});