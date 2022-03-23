const { Worker } = require('worker_threads');
const worker_detectDMrequest = new Worker('./detectDMrequest.js');
const worker_autoFollow = new Worker('./autoFollow.js');

let mongoose = require('mongoose');
let Follow = require('../models/follow');
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

process.on('SIGINT', () => { 
    Follow.updateMany({}, {$set: {status_now: 0}}, error => {
        console.log('All status_now reset');
        process.exit(error ? 1 : 0);
    });
});