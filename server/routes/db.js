let express = require('express');
let router = express.Router();
let Twitter = require('../models/twitter');
let Log = require('../models/log');
let Special = require('../models/special');
const { TwitterClient } = require('twitter-api-client');

/* GET db/twitter/:screen_name */
router.get('/twitter/:screen_name', (req, res, next) => {
  Twitter.findOne({screen_name: req.params.screen_name}, (error, twitter) => {
    if(error) next(error);
    res.json(twitter);
  });
});

/* GET db/twitters */
router.get('/twitters', (req, res, next) => {
  Twitter.find({}, (error, twitters) => {
    if(error) next(error);
    res.json(twitters);
  });
});

/* POST db/twitter */
router.post('/twitter', (req, res, next) => {
  Twitter.create({
    email: req.user['email'],
    screen_name: req.body['screen_name'],
    authorized: req.body['authorized']
  }, error => {
    if(error) next(error);
    res.json(true);
  });
});

/* DELETE db/twitter/:screen_name */
router.delete('/twitter/:screen_name', (req, res, next) => {
  Twitter.deleteOne({screen_name: req.params.screen_name}, error => {
    if(error) next(error);
    res.json(true);
  });
});

/* GET db/logs */
router.get('/logs', (req, res, next) => {
  Log.find({}, (error, logs) => {
    if(error) next(error);
    res.json(logs);
  });
});

/* GET db/special/:screen_name */
router.get('/special/:screen_name', (req, res, next) => {
  Special.findOne({screen_name: req.params.screen_name}, (error, special) => {
    if(error) next(error);
    res.json(special);
  });
});

/* GET db/twitters */
router.get('/specials', (req, res, next) => {
  Special.find({}, (error, specials) => {
    if(error) next(error);
    res.json(specials);
  });
});

/* POST db/special */
router.post('/special', async (req, res, next) => {
  const twitterClient = new TwitterClient({
    apiKey: process.env.API_KEY,
    apiSecret: process.env.API_SECRET,
    accessToken: process.env.ACCESS_TOKEN,
    accessTokenSecret: process.env.ACCESS_TOKEN_SECRET
  });

  try {
    let response = await twitterClient.accountsAndUsers.usersShow({screen_name: req.body['screen_name']});
    await Special.create({
      email: req.user['email'],
      screen_name: req.body['screen_name'],
      user_id: response.id_str
    });
    res.json(true);
  }
  catch(error){
    /* User not found */
    if('statusCode' in error){
      if(error.statusCode === 404){
        res.json(false);
        return;
      }
    }

    next(error);
  }
});

/* DELETE db/twitter/:screen_name */
router.delete('/special/:screen_name', (req, res, next) => {
  Special.deleteOne({screen_name: req.params.screen_name}, error => {
    if(error) next(error);
    res.json(true);
  });
});

/* GET db/summary */
router.get('/summary', async (req, res, next) => {
  let summary = [];
  let date = new Array(5);
  date[0] = new Date();
  for(let i = 1; i < date.length; i++){
    date[i] = new Date(Date.now() - (24 * (i - 1) * 60 * 60 + 23 * 60 * 60 + 59 * 60 + 59) * 1000);
  }
  /*
  Twitter.find({email: req.user['email']}, (error, twitters) => {
    if(error) next(error);
    for(let twitter of twitters){
      Log.find({screen_name: twitter.screen_name}, (error, logs) => {
        if(error) next(error);
        let count_date = new Array(5);
        for(let i = 0; i < count_date.length; i++){
          count_date[i] = logs.filter(log => new Date(Number(log.timestamp)).getMonth() === date[i].getMonth() && new Date(Number(log.timestamp)).getDate() === date[i].getDate()).length;
        }
        let count_sum = logs.filter(log => new Date(Number(log.timestamp)).getMonth() === date[0].getMonth()).length;
        summary.push({
          screen_name: twitter.screen_name,
          date: count_date,
          sum: count_sum
        });
      });
    }
    console.log(summary);
    res.json(summary);
  })*/
  
  try {
    let twitters = await Twitter.find({email: req.user['email']}).exec();
    for(let twitter of twitters){
      let logs = await Log.find({screen_name: twitter.screen_name}).exec();
      let count_date = new Array(5);
      for(let i = 0; i < count_date.length; i++){
        count_date[i] = logs.filter(log => new Date(Number(log.timestamp)).getMonth() === date[i].getMonth() && new Date(Number(log.timestamp)).getDate() === date[i].getDate()).length;
      }
      let count_sum = logs.filter(log => new Date(Number(log.timestamp)).getMonth() === date[0].getMonth()).length;
      summary.push({
        screen_name: twitter.screen_name,
        date: count_date,
        sum: count_sum
      });
    }
    res.json(summary);
  }
  catch(error){
    next(error);
  }
});

module.exports = router;