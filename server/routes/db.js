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
router.post('/special', (req, res, next) => {
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

module.exports = router;