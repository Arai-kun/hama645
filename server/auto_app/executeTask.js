let mongoose = require('mongoose');
let Task = require('../models/task');
let Twitter = require('../models/twitter');
let Log = require('../models/log');
let Follow = require('../models/follow');
let Followed = require('../models/followed');
let Retweet = require('../models/retweet');
let Retweeted = require('../models/retweeted');
let Rtdone = require('../models/rtdone');
let Rate = require('../models/rate');
const { TwitterClient } = require('twitter-api-client');
const Queue = require('promise-queue');
require('dotenv').config();

const queue = new Queue();

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
  console.log('[ET] Successed connecting to DB');
  main();
});

async function main() {
  while (1) {
    console.log('[ET] Active loop executeTask');

    /* Dulation 1s */
    const _sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    await _sleep(1000);

    await executeTask();
  }
}

async function executeTask() {
  try {
    let tasks = await Task.find({ execute_time: { $lte: Date.now() }, ongoing: false }).exec();
    for(let task of tasks) {
      console.log(`[ET] Got task: ${task}`);
      await Task.updateOne({email: task.email, screen_name: task.screen_name, kind: task.kind}, {$set: {ongoing: true}}).exec();
      console.log(task);
      queue.add(async () => {
        switch (task.kind) {
          case 'follow': {
            switch (task.sub_kind) {
              case 0: {
                /* search follow */
                search_follow(task);
                break;
              }
              case 1: {
                /* follower follow */
                follower_follow(task);
                break;
              }
            }
            break;
          }
          case 'retweet': {
            switch (task.sub_kind) {
              case 0: {
                /* retweet */
                retweet(task);
                break;
              }
              case 1: {
                /* keyword retweet */
                keyword_retweet(task);
                break;
              }
            }
            break;
          }
          default:
            break;
        }
      });
    }
  }
  catch (error) {
    console.log('[ET][*** Fatal Error ***]: ' + error);
    return;
  }
}

/**
 * @param {Object} task
 * @param {string} task.email
 * @param {string} task.screen_name
 * @param {string} task.timestamp
 * @param {string} task.kind
 * @param {number} task.sub_kind
 * @param {number} task.execute_time
 * @param {string} task.keyword
 * @param {string} task.partner
 * @param {number?} task.retweeted_timeline
 * @param {boolean} task.ongoing
 */
async function search_follow(task) {
  try {
  }
  catch (error) {
    console.log(`[ET][Error][${task.email}][${task.screen_name}][${task.kind} ${task.sub_kind}]: ` + JSON.stringify(error));
  }
}

/**
 * @param {Object} task
 * @param {string} task.email
 * @param {string} task.screen_name
 * @param {string} task.timestamp
 * @param {string} task.kind
 * @param {number} task.sub_kind
 * @param {number} task.execute_time
 * @param {string} task.keyword
 * @param {string} task.partner
 * @param {number?} task.retweeted_timeline
 * @param {boolean} task.ongoing
 */
async function follower_follow(task) {
  try {


  }
  catch (error) {
    console.log(`[ET][Error][${task.email}][${task.screen_name}][${task.kind} ${task.sub_kind}]: ` + JSON.stringify(error));
  }
}

/**
 * @param {Object} task
 * @param {string} task.email
 * @param {string} task.screen_name
 * @param {string} task.timestamp
 * @param {string} task.kind
 * @param {number} task.sub_kind
 * @param {number} task.execute_time
 * @param {string} task.keyword
 * @param {string} task.partner
 * @param {number?} task.retweeted_timeline
 * @param {boolean} task.ongoing
 */
async function retweet(task) {
  try {
    console.log(`[ET][retweet][${task.email}][${task.screen_name}] Task start`);
    const twitter = await Twitter.findOne({ email: task.email, screen_name: task.screen_name }).exec();
    const twitterClient = new TwitterClient({
      apiKey: process.env.API_KEY,
      apiSecret: process.env.API_SECRET,
      accessToken: twitter.oauth_token,
      accessTokenSecret: twitter.oauth_token_secret
    });
    /* Rate limit 1 request per 1s */
    const response = await twitterClient.tweets.statusesUserTimeline({ user_id: task.partner, count: 2, trim_user: true, exclude_replies: true, include_rts: false });
    const rt = response[task.retweeted_timeline];
    /* Rate limit 5 request per 3 min, that is, more then 1 request per 1 min */
    await twitterClient.tweets.statusesRetweetById({ id: rt.id_str });
    console.log(`[ET][retweet][${task.email}][${task.screen_name}] Successfully retweet ${rt.id_str}`);
    await Rtdone.create({
      email: task.email,
      screen_name: task.screen_name,
      timestamp: `${Date.now()}`,
      retweeted_id: rt.id_str
    });
    await Log.create({
      email: task.email,
      timestamp: `${Date.now()}`,
      screen_name: task.screen_name,
      event: 8,
      partner_screen_name: ''
    });
    let retweet = await Retweet.findOne({ email: task.email, screen_name: task.screen_name }).exec();
    retweet.retweeted_user_ids.push(task.partner);
    await retweet.save();
  }
  catch (error) {
    console.log(error)
    console.log(`[ET][Error][retweet][${task.email}][${task.screen_name}]: ` + JSON.stringify(error));
    if (('statusCode' in error) && ('data' in error)) {
      const json_data = JSON.parse(error.data);
      if (error.statusCode === 403 && json_data.errors[0].code === 326) {
        /* Temporary locked */
        await Retweet.updateOne({ email: task.email, screen_name: task.screen_name }, { $set: { status: 3 } }).exec();
      }
    }
  }
  finally {
    await Task.deleteOne({ email: task.email, screen_name: task.screen_name, kind: task.kind }).exec();
    console.log(`[ET][retweet][${task.email}][${task.screen_name}] Task done`);
  }
}

/**
 * @param {Object} task
 * @param {string} task.email
 * @param {string} task.screen_name
 * @param {string} task.timestamp
 * @param {string} task.kind
 * @param {number} task.sub_kind
 * @param {number} task.execute_time
 * @param {string} task.keyword
 * @param {string} task.partner
 * @param {number?} task.retweeted_timeline
 * @param {boolean} task.ongoing
 */
async function keyword_retweet(task) {
  try {
    console.log(`[ET][k_retweet][${task.email}][${task.screen_name}] Task start`);
    const twitter = await Twitter.findOne({ email: user.email, screen_name: retweet.screen_name }).exec();
    const twitterClient = new TwitterClient({
      apiKey: process.env.API_KEY,
      apiSecret: process.env.API_SECRET,
      accessToken: twitter.oauth_token,
      accessTokenSecret: twitter.oauth_token_secret
    });
    /* Rate limit 1 request per 1s */
    const response = await twitterClient.tweets.statusesUserTimeline({ user_id: task.partner, count: 2, trim_user: true, exclude_replies: true, include_rts: false });
    const rt = response[task.retweeted_timeline];
    if (rt.text.search(task.keyword) !== -1) {
      /* Rate limit 5 request per 3 min, that is, more then 1 request per 1 min */
      await twitterClient.tweets.statusesRetweetById({ id: rt.id_str });
      console.log(`[ET][k_retweet][${task.email}][${task.screen_name}] Success that ${retweet.screen_name} retweets ${rt.id_str}`);
      await Rtdone.create({
        email: task.email,
        screen_name: task.screen_name,
        timestamp: `${Date.now()}`,
        retweeted_id: rt.id_str
      });
      await Log.create({
        email: task.email,
        timestamp: `${Date.now()}`,
        screen_name: task.screen_name,
        event: 8,
        partner_screen_name: ''
      });
      let retweet = await Retweet.findOne({ email: task.email, screen_name: task.screen_name }).exec();
      retweet.retweeted_user_ids.push(task.partner);
      await retweet.save();
    }
  }
  catch (error) {
    console.log(`[ET][Error][k_retweet][${task.email}][${task.screen_name}]: ` + JSON.stringify(error));
    if (('statusCode' in error) && ('data' in error)) {
      const json_data = JSON.parse(error.data);
      if (error.statusCode === 403 && json_data.errors[0].code === 326) {
        /* Temporary locked */
        await Retweet.updateOne({ email: task.email, screen_name: task.screen_name }, { $set: { status: 3 } }).exec();
      }
    }
  }
  finally {
    await Task.deleteOne({ email: task.email, screen_name: task.screen_name, kind: task.kind }).exec();
    console.log(`[ET][k_retweet][${task.email}][${task.screen_name}] Task done`);
  }
}
