let express = require('express');
let router = express.Router();
let Twitter = require('../models/twitter');
const { TwitterClient } = require('twitter-api-client');

/* GET auth/requestToken */
router.get('/requestToken/:id', async (req, res, next) => {
  const twitterClient = new TwitterClient({
    apiKey: process.env.API_KEY,
    apiSecret: process.env.API_SECRET,
    accessToken: process.env.ACCESS_TOKEN,
    accessTokenSecret: process.env.ACCESS_TOKEN_SECRET
  });

  try{
    let response = await twitterClient.basics.oauthRequestToken({oauth_callback: `https://enginestarter.nl/oauth?id=${req.params.id}`});
    await Twitter.create({
      id: req.params.id,
      oauth_token: response.oauth_token,
      oauth_token_secret: response.oauth_token_secret
    });
    res.json(response);
  }
  catch(error){
    console.log(error);
    next(error);
  }
});

/* POST oauth/checkToken */
router.post('/checkToken', (req, res, next) => {
  Twitter.findOne({id: req.body['id']}, (error, twitter) => {
    if(error) next(error);
    if(req.body['oauth_token'] === twitter.oauth_token){
      res.json(true);
    }
    else{
      res.json(false);
    }
  });
});

/* POST oauth/exchangeToken/:id */
router.post('/exchangeToken/:id', async (req, res, next) => {
  try {
    let twitter = await Twitter.findOne({id: req.params.id}).exec();
    const twitterClient = new TwitterClient({
      apiKey: process.env.API_KEY,
      apiSecret: process.env.API_SECRET,
      accessToken: twitter.oauth_token,
      accessTokenSecret: twitter.oauth_token_secret
    });
    let response = await twitterClient.basics.oauthAccessToken({oauth_verifier: req.body['oauth_verifier']});
    console.log(response);
    Twitter.updateOne({oauth_token: response.oauth_token}, {$set: {oauth_token_secret: response.oauth_token_secret}}, error => {
      if(error) next(error);
      res.json(true);
    });

  }
  catch(error){
    console.log(error);
    next(error);
  }
})

module.exports = router;
