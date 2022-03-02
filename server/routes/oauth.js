let express = require('express');
let router = express.Router();
let Twitter = require('../models/twitter');
const { TwitterClient } = require('twitter-api-client');

/* GET auth/requestToken/:screen_name */
router.get('/requestToken/:screen_name', async (req, res, next) => {
  const twitterClient = new TwitterClient({
    apiKey: process.env.API_KEY,
    apiSecret: process.env.API_SECRET,
    accessToken: process.env.ACCESS_TOKEN,
    accessTokenSecret: process.env.ACCESS_TOKEN_SECRET
  });

  try{
    let response = await twitterClient.basics.oauthRequestToken({oauth_callback: `https://enginestarter.nl/oauth?screen_name=${req.params.screen_name}`});
    let twitter = await Twitter.findOne({screen_name: req.params.screen_name}).exec();
    twitter.oauth_token = response.oauth_token;
    twitter.oauth_token_secret = response.oauth_token_secret;
    await twitter.save();
    res.json(response);
  }
  catch(error){
    console.log(error);
    next(error);
  }
});

/* POST oauth/checkToken */
router.post('/checkToken', (req, res, next) => {
  Twitter.findOne({screen_name: req.body['screen_name']}, (error, twitter) => {
    if(error) next(error);
    if(req.body['oauth_token'] === twitter.oauth_token){
      res.json(true);
    }
    else{
      res.json(false);
    }
  });
});

/* POST oauth/exchangeToken */
router.post('/exchangeToken', async (req, res, next) => {
  try {
    let twitter = await Twitter.findOne({screen_name: req.body['screen_name']}).exec();
    let twitterClient = new TwitterClient({
      apiKey: process.env.API_KEY,
      apiSecret: process.env.API_SECRET,
      accessToken: twitter.oauth_token,
      accessTokenSecret: twitter.oauth_token_secret
    });
    let response = await twitterClient.basics.oauthAccessToken({oauth_verifier: req.body['oauth_verifier']});
    twitter.oauth_token = response.oauth_token;
    twitter.oauth_token_secret = response.oauth_token_secret;
    twitter.user_id = response.user_id;
    twitter.authorized = true;
    console.log(response);

    twitterClient = new TwitterClient({
      apiKey: process.env.API_KEY,
      apiSecret: process.env.API_SECRET,
      accessToken: twitter.oauth_token,
      accessTokenSecret: twitter.oauth_token_secret
    });
    let response2 = await twitterClient.accountsAndUsers.usersShow({screen_name: req.body['screen_name']});
    if(response.user_id !== response2.id_str){
      res.json(false);
      return;
    }

    await twitter.save();
    res.json(true);
  }
  catch(error){
    console.log(error);
    next(error);
  }
});

module.exports = router;
