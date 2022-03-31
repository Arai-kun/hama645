let mongoose = require('mongoose');
let Twitter = require('../models/twitter');
let User = require('../models/user');
let Log = require('../models/log');
let Follow = require('../models/follow');
let Followed = require('../models/followed');
let Rate = require('../models/rate');
const { TwitterClient } = require('twitter-api-client');
const Queue = require('promise-queue');
const queue = new Queue();
let schedule = require('node-schedule');
require('dotenv').config();

/* The following process may be not called */
process.on('SIGINT', () => {
  schedule.gracefulShutdown().then(() => {
    console.log('Schedule shutdown');
    Follow.updateMany({}, { $set: { status_now: 0 } }, error => {
      console.log('All status_now reset');
      process.exit(error ? 1 : 0);
    });
  });
});

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
  console.log('[AF] Successed connecting to DB');
  main();
});

async function main() {

  /* Enable per 15 min */
  schedule.scheduleJob('*/15 * * * *', () => {
    checkFollowed();
  });

  while (1) {
    console.log('[AF] Active loop autoFollow');
    const _sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    await _sleep(1000 * 5);

    await autoFollow();
    //await checkFollowed();
  }
}

async function autoFollow() {
  try {
    console.log('[AF] Auto Follow start!');
    let users = await User.find({}).exec();
    for (let user of users) {
      console.log(`[AF] ${user.email} 's turn`);
      let follows = await Follow.find({ email: user.email, status_now: 0 }).exec();
      //follows = follows.filter(follow => follow.status_now === 0);
      for (let follow of follows) {
        queue.add(async () => {
          try {
            let twitter = await Twitter.findOne({ email: user.email, screen_name: follow.screen_name }).exec();
            console.log(`[AF] ${twitter.screen_name} in ${twitter.email} start`);
            const twitterClient = new TwitterClient({
              apiKey: process.env.API_KEY,
              apiSecret: process.env.API_SECRET,
              accessToken: twitter.oauth_token,
              accessTokenSecret: twitter.oauth_token_secret
            });
            follow.status_now = follow.status;
            await follow.save();
            switch (follow.status_now) {
              case 0:
                console.log('[AF] In vacance');
                break;
              case 1: {
                /* Search and follow */
                console.log('[AF] Start searching and follow');
                /* Rate 1 req per 5 sec */
                let response = await twitterClient.tweets.search({ q: follow.keyword, count: 100 });
                let searched_users = response.statuses.map(searched_user => {
                  return { user_id: searched_user.user.id_str, screen_name: searched_user.user.screen_name };
                });
                searched_users = searched_users.filter(el => !twitter.friendIds.includes(el.user_id));

                for (let searched of searched_users) {

                  let count = 0;
                  let followeds = await Followed.find({ email: user.email, screen_name: follow.screen_name }).exec();
                  do {
                    let status_check = await Follow.findOne({ email: user.email, screen_name: follow.screen_name }).exec();
                    if (status_check.status !== follow.status_now) {
                      console.log('[AF] Changed status');
                      follow.status_now = 0;
                      await follow.save();
                      return;
                    }

                    const now = new Date();
                    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
                    count = followeds.filter(followed => today.getTime() <= Number(followed.timestamp) && Number(followed.timestamp) < (today.getTime() + 24 * 60 * 60 * 1000)).length;
                    if (count >= follow.count_max) {
                      follow.maxed = true;
                      await follow.save();
                      console.log('[AF] Exceed set count_max: ' + follow.count_max + ' Wait 5 sec ....');
                      const _sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
                      await _sleep(5 * 1000);
                    }

                  }
                  while (count >= follow.count_max);
                  if (follow.maxed) {
                    follow.maxed = false;
                    await follow.save();
                  }

                  /* e.g. min:2 max: 15 */
                  let wait = Math.floor(Math.random() * (follow.range_max - follow.range_min) + follow.range_min);
                  if (wait > 0) {
                    console.log(`[AF] Wait ${wait} min ....`);
                    const _sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
                    await _sleep(wait * 60 * 1000);
                  }

                  try {
                    let response2 = await twitterClient.accountsAndUsers.friendshipsCreate({ user_id: searched.user_id });
                    twitter.friendIds.push(response2.id_str);
                    await twitter.save();
                    console.log(`[AF] Success that ${follow.screen_name} follows ${response2.screen_name}`);
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
                  catch (error) {
                    console.log(JSON.stringify(error));
                  }
                }
                follow.status = 0;
                follow.status_now = follow.status;
                follow.save();
                break;
              }
              case 2: {
                /* Follow arbitary account's followers */
                console.log('[AF] Start follow arbitary account followers');
                let response3 = await twitterClient.accountsAndUsers.usersShow({ screen_name: follow.keyword });
                const specified_user_id = response3.id_str;

                let ids = [];
                let cursor = -1;
                let rate = await Rate.findOne({ screen_name: follow.screen_name, kind: 'followersIds' }).exec();
                if (!rate) {
                  await Rate.create({
                    screen_name: follow.screen_name,
                    latest_request_time: `${Date.now()}`,
                    kind: 'followersIds'
                  });
                }
                else {
                  let diff = Date.now() - Number(rate.latest_request_time);
                  const _sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
                  if (0 <= diff && diff < (60 * 1000)) {
                    console.log(`[AF] Wait ${(60 * 1000) - diff} ms (followersIds)...`);
                    await _sleep((60 * 1000) - diff);
                  }
                  else if (diff < 0) {
                    console.log(`[AF] Wait ${(60 * 1000)} ms (followersIds)...`);
                    await _sleep((60 * 1000));
                  }
                  else {
                    // No wait
                  }
                  rate.latest_request_time = `${Date.now()}`;
                  await rate.save();
                }

                do {
                  /* Rate limit 15 per 15 min (user). Danger more than 5000 followers */
                  let response = await twitterClient.accountsAndUsers.followersIds({ user_id: specified_user_id, cursor: cursor, stringify_ids: true });
                  response.ids.forEach(id => {
                    ids.push(id);
                  });
                  cursor = response.next_cursor;
                }
                while (cursor !== 0);
                ids = ids.filter(id => !twitter.friendIds.includes(id) && id !== follow.user_id);
                for (let id of ids) {

                  let count = 0;
                  let followeds = await Followed.find({ email: user.email, screen_name: follow.screen_name }).exec();
                  do {
                    let status_check = await Follow.findOne({ email: user.email, screen_name: follow.screen_name }).exec();
                    if (status_check.status !== follow.status_now) {
                      console.log('[AF] Changed status');
                      follow.status_now = 0;
                      await follow.save();
                      return;
                    }

                    const now = new Date();
                    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
                    count = followeds.filter(followed => today.getTime() <= Number(followed.timestamp) && Number(followed.timestamp) < (today.getTime() + 24 * 60 * 60 * 1000)).length;
                    if (count >= follow.count_max) {
                      follow.maxed = true;
                      await follow.save();
                      console.log('[AF] Exceed set count_max: ' + follow.count_max + ' Wait 5 sec ....');
                      const _sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
                      await _sleep(5 * 1000);
                    }

                  }
                  while (count >= follow.count_max);
                  if (follow.maxed) {
                    follow.maxed = false;
                    await follow.save();
                  }

                  /* e.g. min:2 max: 15 */
                  let wait = Math.floor(Math.random() * (follow.range_max - follow.range_min) + follow.range_min);
                  if (wait > 0) {
                    console.log(`[AF] Wait ${wait} min ....`);
                    const _sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
                    await _sleep(wait * 60 * 1000);
                  }

                  try {
                    let response2 = await twitterClient.accountsAndUsers.friendshipsCreate({ user_id: id });
                    twitter.friendIds.push(response2.id_str);
                    await twitter.save();
                    console.log(`[AF] Success that ${follow.screen_name} follows ${response2.screen_name}`);
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
                  catch (error) {
                    console.log('[AF] ' + JSON.stringify(error));
                  }
                }
                follow.status = 0;
                follow.status_now = follow.status;
                follow.save();

                break;
              }
              case 3: {
                /* Both */
                console.log('Start Both');
                /* Rate 1 req per 5 sec */
                let response = await twitterClient.tweets.search({ q: follow.keyword, count: 100 });
                let ids = response.statuses.map(searched_user => searched_user.user.id_str);
                let rate = await Rate.findOne({ screen_name: follow.screen_name, kind: 'followersIds' }).exec();
                if (!rate) {
                  await Rate.create({
                    screen_name: follow.screen_name,
                    latest_request_time: `${Date.now()}`,
                    kind: 'followersIds'
                  });
                }
                else {
                  let diff = Date.now() - Number(rate.latest_request_time);
                  const _sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
                  if (0 <= diff && diff < (60 * 1000)) {
                    console.log(`Wait ${(60 * 1000) - diff} ms (followersIds)...`);
                    await _sleep((60 * 1000) - diff);
                  }
                  else if (diff < 0) {
                    console.log(`Wait ${(60 * 1000)} ms (followersIds)...`);
                    await _sleep((60 * 1000));
                  }
                  else {
                    // No wait
                  }
                  rate.latest_request_time = `${Date.now()}`;
                  await rate.save();
                }

                let cursor = -1;
                do {
                  /* Rate limit 15 per 15 min (user). Danger more than 5000 followers*/
                  let response2 = await twitterClient.accountsAndUsers.followersIds({ cursor: cursor, stringify_ids: true });
                  response2.ids.forEach(id => {
                    if (!ids.includes(id)) {
                      ids.push(id);
                    }
                  });
                  cursor = response2.next_cursor;
                }
                while (cursor !== 0);
                ids = ids.filter(id => !twitter.friendIds.includes(id));

                for (let id of ids) {
                  /* e.g. min:2 max: 15 */
                  let wait = Math.floor(Math.random() * (follow.range_max - follow.range_min) + follow.range_min);
                  console.log(`Wait ${wait} min ....`);
                  const _sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
                  await _sleep(wait * 60 * 1000);

                  try {
                    let response3 = await twitterClient.accountsAndUsers.friendshipsCreate({ user_id: id });
                    twitter.friendIds.push(response3.id_str);
                    await twitter.save();
                    console.log(`Success that ${follow.screen_name} follows ${response3.screen_name}`);
                    let existFollowed = await Followed.findOne({ email: follow.email, screen_name: follow.screen_name, followed_user_id: response3.id_str }).exec();
                    if (existFollowed) {
                      existFollowed.timestamp = `${Date.now()}`;
                      await existFollowed.save();
                    }
                    else {
                      await Followed.create({
                        email: follow.email,
                        screen_name: follow.screen_name,
                        timestamp: `${Date.now()}`,
                        followed_user_id: response3.id_str
                      });
                    }
                    await Log.create({
                      email: follow.email,
                      timestamp: `${Date.now()}`,
                      screen_name: follow.screen_name,
                      event: 6,
                      partner_screen_name: response3.screen_name
                    });

                  }
                  catch (error) {
                    console.log(JSON.stringify(error));
                  }
                }


                break;
              }
              default:
                break;
            }
          }
          catch (error) {
            follow.status = 0;
            follow.status_now = follow.status;
            await follow.save();
            console.log(`[AF] ***${follow.screen_name}*** ` + JSON.stringify(error));
          }
        });
      }
    }
    console.log(`[AF] Auto Follow completed! Queue pending length: ${queue.getPendingLength()}`);
  }
  catch (error) {
    console.log('[AF] **Critical Error! Content: ' + JSON.stringify(error));
    return;
  }
}

/** 
 * 15分の間に15個までのフォロー解除タスクは即時終了するが、
 * 16個以上は危険(ほぼありえない=>最小間隔を1分に制限する？)
 */
async function checkFollowed() {
  try {
    console.log('[CF] CheckFollowed start!');
    let users = await User.find({}).exec();
    await Promise.all(users.map(async user => {
      console.log(`[CF] ${user.email} 's turn`);
      let followeds = await Followed.find({ email: user.email }).exec();
      const now = new Date();
      followeds = followeds.filter(followed => (now.getTime() - Number(followed.timestamp)) >= 3 * 24 * 60 * 60 * 1000 && (now.getTime() - Number(followed.timestamp)) < 4 * 24 * 60 * 60 * 1000);
      let expired_followeds = [];
      let kinds = [];
      followeds.forEach(followed => {
        if (!kinds.includes(followed.screen_name)) {
          kinds.push(followed.screen_name);
        }
      });
      kinds.forEach(kind => {
        let ids = (followeds.filter(followed => followed.screen_name === kind)).map(el => el.followed_user_id);
        expired_followeds.push({
          screen_name: kind,
          followed_user_ids: ids
        });
      });
      await Promise.all(expired_followeds.map(async expired_followed => {
        let twitter = await Twitter.findOne({ email: user.email, screen_name: expired_followed.screen_name }).exec();
        console.log(`[CF] ${twitter.screen_name} in ${twitter.email} start`);
        console.log(`[CF] Detect the number of expired followed: ${expired_followed.followed_user_ids.length}`);
        const twitterClient = new TwitterClient({
          apiKey: process.env.API_KEY,
          apiSecret: process.env.API_SECRET,
          accessToken: twitter.oauth_token,
          accessTokenSecret: twitter.oauth_token_secret
        });
        let ids = [];
        let cursor = -1;
        let rate = await Rate.findOne({ screen_name: twitter.screen_name, kind: 'followersIds' }).exec();
        if (!rate) {
          await Rate.create({
            screen_name: twitter.screen_name,
            latest_request_time: `${Date.now()}`,
            kind: 'followersIds'
          });
        }
        else {
          let diff = Date.now() - Number(rate.latest_request_time);
          const _sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
          if (0 <= diff && diff < (60 * 1000)) {
            console.log(`[CF] Wait ${(60 * 1000) - diff} ms (followersIds)...`);
            await _sleep((60 * 1000) - diff);
          }
          else if (diff < 0) {
            console.log(`[CF] Wait ${(60 * 1000)} ms (followersIds)...`);
            await _sleep((60 * 1000));
          }
          else {
            // No wait
          }
          rate.latest_request_time = `${Date.now()}`;
          await rate.save();
        }

        do {
          /* Rate limit 15 per 15 min (user). Danger more than 5000 followers */
          let response = await twitterClient.accountsAndUsers.followersIds({ cursor: cursor, stringify_ids: true });
          response.ids.forEach(id => {
            ids.push(id);
          });
          cursor = response.next_cursor;
        }
        while (cursor !== 0);

        let counter = 0;
        for (let followed_user_id of expired_followed) {
          try {
            /* Check whether the followed is included in the latest friendIds? */
            if (twitter.friendIds.includes(followed_user_id)) {
              if (!ids.includes(followed_user_id)) {
                counter++;
                if (counter > 15) {
                  console.log('[CF] Exceed rate limit! Wait 60s ...');
                  const _sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
                  await _sleep((60 * 1000));
                }
                /* Rate limit 15 per 15 min (user) */
                let response = await twitterClient.accountsAndUsers.friendshipsDestroy({ user_id: followed_user_id });
                await Log.create({
                  email: twitter.email,
                  timestamp: `${Date.now()}`,
                  screen_name: twitter.screen_name,
                  event: 7,
                  partner_screen_name: response.screen_name
                });
              }
            }
            await Followed.deleteOne({ email: twitter.email, screen_name: expired_followed.screen_name, followed_user_id: followed_user_id });
          }
          catch (error) {
            console.log('[CF] ' + JSON.stringify(error));
          }
        }
      }));
    }));
    console.log('[CF] CheckFollowed completed!');
  }
  catch (error) {
    console.log('[CF] **Critical Error! Content: ' + JSON.stringify(error));
  }
}