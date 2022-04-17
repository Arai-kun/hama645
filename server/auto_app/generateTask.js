let mongoose = require('mongoose');
let User = require('../models/user');
let Task = require('../models/task');
let Follow = require('../models/follow');
let Followed = require('../models/followed');
let Retweet = require('../models/retweet');
let Retweeted = require('../models/retweeted');
let Rtdone = require('../models/rtdone');
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
  console.log('[GT] Successed connecting to DB');
  main();
});

async function main() {
  while (1) {
    console.log('[GT] Active loop generateTask');

    /* Dulation 5s */
    const _sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    await _sleep(1000 * 5);

    await generateTask();
  }
}

async function generateTask() {
  try {
    const users = await User.find({}).exec();
    users.forEach(user => {
      queue.add(async () => {
        try {
          /* Follow */
          /*console.log(`[Follow][${user.email}] Start to generate task`);
          let follows = await Follow.find({
            $or: [
              { email: user.email, status: 1 },
              { email: user.email, status: 2 }
            ]
          }).exec();
          follows.forEach(follow => {
            const task = await Task.findOne({ email: user.email, screen_name: follow.screen_name, kind: 'follow' }).exec();
            if (!task) {
              const label = `[Follow][${user.email}][${follow.screen_name}] Task generate process completed`;
              console.time(label);*/

              /**
               * TODO: Do not process filtering on Node but on MongoDB
               */
              /* Check followed length today */
              /*const followeds = await Followed.find({ email: user.email, screen_name: follow.screen_name }).exec();
              let today = new Date();
              today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
              const count = followeds.filter(followed => today.getTime() <= Number(followed.timestamp) && Number(followed.timestamp) < (today.getTime() + 24 * 60 * 60 * 1000)).length;

              switch (follow.status) {
                case 1: {
                  if (count >= follow.count_max) {
                    console.log(`[Follow][${user.email}][${follow.screen_name}] Exceed set count_max (${follow.count_max})`);
                    follow.status = 2;
                    await follow.save();
                  }
                  else {
                    const wait_min = Math.floor(Math.random() * (follow.range_max - follow.range_min) + follow.range_min);
                    await Task.create({
                      email: user.email,
                      screen_name: follow.screen_name,
                      timestamp: `${Date.now()}`,
                      kind: 'follow',
                      sub_kind: follow.mode,
                      execute_time: Date.now() + wait_min * 60 * 1000,
                      keyword: `${follow.mode === 0 ? follow.keyword : ''}`,
                      partner: `${follow.mode === 1 ? follow.keyword : ''}`,
                      ongoing: false 
                    });
                    console.log(`[Follow][${user.email}][${follow.screen_name}] Task created`);
                  }
                  break;
                }
                case 2: {
                  if(count < follow.count_max){
                    follow.status = 1;
                    await follow.save();
                  }
                  break;
                }
                default:
                  break;
              }
              console.timeEnd(label);
            }
          });*/

          /* Retweet */
          console.log(`[GT][Retweet][${user.email}] Start to generate task`);
          let retweets = await Retweet.find({
            $or: [
              { email: user.email, status: 1 },
              { email: user.email, status: 2 }
            ]
          }).exec();
          const retweeteds = await Retweeted.find({email: user.email}).exec();
          for(let retweet of retweets){
            const task = await Task.findOne({ email: user.email, screen_name: retweet.screen_name, kind: 'retweet' }).exec();
            if (!task) {
              //const label = `[GT][Retweet][${user.email}][${retweet.screen_name}] Task generate process completed`;
              //console.time();

              /**
               * TODO: Do not process filtering on Node but on MongoDB
               */
              /* Check rtdone length today */
              const rtdones = await Rtdone.find({ email: user.email, screen_name: retweet.screen_name }).exec();
              let today = new Date();
              today = new Date(today.getFullYear(), today.getMonth(), today.getDate());
              const count = rtdones.filter(rtdone => today.getTime() <= Number(rtdone.timestamp) && Number(rtdone.timestamp) < (today.getTime() + 24 * 60 * 60 * 1000)).length;

              switch (retweet.status) {
                case 1: {
                  const retweeted_user_ids = retweeteds.filter(retweeted => !(retweet.retweeted_user_ids.include(retweeted.user_id)));
                  if(retweeted_user_ids.length === 0){
                    console.log(`[GT][Retweet][${user.email}][${retweet.screen_name}] All retweeted done`);
                    retweet.status = 0;
                    await retweet.save();
                  }
                  else {
                    if (count >= retweet.count_max) {
                      console.log(`[GT][Retweet][${user.email}][${retweet.screen_name}] Exceed set count_max (${retweet.count_max})`);
                      retweet.status = 2;
                      await retweet.save();
                    }
                    else{
                      const retweeted_user_id = retweeted_user_ids[Math.floor(Math.random() * (retweeted_user_ids.length - 1))];
                      const wait_min = Math.floor(Math.random() * (retweet.range_max - retweet.range_min) + retweet.range_min);
                      await Task.create({
                        email: user.email,
                        screen_name: retweet.screen_name,
                        timestamp: `${Date.now()}`,
                        kind: 'retweet',
                        sub_kind: retweet.mode,
                        execute_time: Date.now() + wait_min * 60 * 1000,
                        keyword: `${retweet.mode === 1 ? retweet.keyword : ''}`,
                        partner: retweeted_user_id,
                        retweeted_timeline: retweet.retweeted_timeline,
                        ongoing: false
                      });
                      console.log(`[GT][Retweet][${user.email}][${retweet.screen_name}] Task created`);
                    }
                  }
                  break;
                }
                case 2: {
                  if(count < retweet.count_max){
                    retweet.status = 1;
                    await retweet.save();
                  }
                  break;
                }
                default:
                  break;
              }
              //console.timeEnd();
            }
          }
        }
        catch (error) {
          console.log(error);
          console.log(`[GT][Error][${user.email}]: ` + JSON.stringify(error));
        }
      });
    });
  }
  catch (error) {
    console.log('[GT][*** Fatal Error ***]: ' + JSON.stringify(error));
    return;
  }
}