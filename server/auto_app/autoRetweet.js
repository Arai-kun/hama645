let mongoose = require('mongoose');
let Twitter = require('../models/twitter');
let User = require('../models/user');
let Log = require('../models/log');
let Retweet = require('../models/retweet');
let Retweeted = require('../models/retweeted');
let Rtdone = require('../models/rtdone');
//let Rate = require('../models/rate');
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

async function main() {

  while (1) {
    console.log('[AR] Active loop autoRetweet');
    const _sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    await _sleep(1000 * 5);

    await autoRetweet();
  }
}

async function autoRetweet() {
  try{
    console.log('[AR] Auto Retweet start!');
    let users = await User.find({}).exec();
    for(let user of users){
      console.log(`[AR] ${user.email} 's turn`);
      let retweets = await Retweet.find({email:user.email, status_now: 0}).exec();
      let retweeteds = await Retweeted.find({email: user.email}).exec();
      for(let retweet of retweets){
        queue.add(async () => {
          try{
            let twitter = await Twitter.findOne({ email: user.email, screen_name: retweet.screen_name }).exec();
            console.log(`[AR] ${twitter.screen_name} in ${twitter.email} start`);
            const twitterClient = new TwitterClient({
              apiKey: process.env.API_KEY,
              apiSecret: process.env.API_SECRET,
              accessToken: twitter.oauth_token,
              accessTokenSecret: twitter.oauth_token_secret
            });
            retweet.status_now = retweet.status;
            await retweet.save();
            switch(retweet.status_now){
              case 0:
                console.log('[AR] In vacance');
                break;
              case 1: {
                console.log('[AR] Start retweet');
                for(let retweeted of retweeteds){
                  /* Rate limit 1 request per 1s */
                  let response = await twitterClient.tweets.statusesUserTimeline({user_id: retweeted.user_id, count: 2, trim_user: true, exclude_replies: true, include_rts: false});
                  console.log(response);
                  for(let rt of response){
                    try {
                      let rtdones = await Rtdone.find({email: user.email, screen_name: retweet.screen_name}).exec();
                      if(!rtdones.map(rtdone => rtdone.retweeted_id).includes(rt.id_str)){

                        let count = 0;
                        do {
                          let status_check = await Retweet.findOne({email: user.email, screen_name: retweet.screen_name}).exec();
                          if (status_check.status !== retweet.status_now) {
                            console.log('[AR] Changed status');
                            retweet.status_now = 0;
                            await retweet.save();
                            return;
                          }
      
                          const now = new Date();
                          const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
                          count = rtdones.filter(rtdone => today.getTime() <= Number(rtdone.timestamp) && Number(rtdone.timestamp) < (today.getTime() + 24 * 60 * 60 * 1000)).length;
                          if (count >= retweet.count_max) {
                            retweet.maxed = true;
                            await retweet.save();
                            console.log('[AR] Exceed set count_max: ' + retweet.count_max + ' Wait 5 sec ....');
                            const _sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
                            await _sleep(5 * 1000);
                          }
      
                        }
                        while (count >= retweet.count_max);
                        if(retweet.maxed) {
                          retweet.maxed = false;
                          await retweet.save();
                        }


                        /* e.g. min:2 max: 15 */
                        let wait = Math.floor(Math.random() * (retweet.range_max - retweet.range_min) + retweet.range_min);
                        if (wait > 0) {
                          console.log(`[AR] Wait ${wait} min ....`);
                          const _sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
                          await _sleep(wait * 60 * 1000);
                        }

                        /* Rate limit 5 request per 3 min, that is, more then 1 request per 1 min */
                        await twitterClient.tweets.statusesRetweetById({id: rt.id_str});
                        console.log(`[AR] Success that ${retweet.screen_name} retweets ${rt.id_str}`);
                        await Rtdone.create({
                          email: retweet.email,
                          screen_name: retweet.screen_name,
                          timestamp: `${Date.now()}`,
                          retweeted_id: rt.id_str
                        });
                        await Log.create({
                          email: retweet.email,
                          timestamp: `${Date.now()}`,
                          screen_name: retweet.screen_name,
                          event: 8,
                          partner_screen_name: ''
                        });
                      }
                      else{
                        console.log(`[AR] Detect already retweeted id ${rt.id_str}`);
                      }
                    }
                    catch(error){
                      console.log(JSON.stringify(error));
                    } 
                  }
                  /* Wait for protecting status user timeline */
                  const _sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
                  await _sleep(1000);
                }
                retweet.status = 0;
                retweet.status_now = retweet.status;
                retweet.save();
                break;
              }
            }
          }
          catch(error){
            retweet.status = 0;
            retweet.status_now = retweet.status;
            await retweet.save();
            console.log(`[AR] ***${retweet.screen_name}*** ` + JSON.stringify(error));
          }
        });
      }
    }
    console.log(`[AR] Auto Retweet completed! Queue pending length: ${queue.getPendingLength()}`);
  }
  catch(error){
    console.log('[AR] **Critical Error! Content: ' + JSON.stringify(error));
    return;
  }
}