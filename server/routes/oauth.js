let express = require('express');
let router = express.Router();
let Twitter = require('../models/twitter');
const { TwitterClient } = require('twitter-api-client');
const e = require('express');

const twitterClient = new TwitterClient({
  apiKey: process.env.API_KEY,
  apiSecret: process.env.API_SECRET,
  accessToken: process.env.ACCESS_TOKEN,
  accessTokenSecret: process.env.ACCESS_TOKEN_SECRET
});

/* GET auth/requestToken */
router.get('/requestToken/:id', async (req, res, next) => {
  try{
    let response = await twitterClient.basics.oauthRequestToken({oauth_callback: `https://enginestarter.nl/dmtool/auth?id=${req.params.id}`});
    await Twitter.create({
      id: req.params.token,
      oauth_token: response.oauth_token
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

router.get('/exchangeToken/:oauth_verifier', async (req, res, next) => {
  try {
    let response = await twitterClient.basics.oauthAccessToken({oauth_verifier: req.params.oauth_verifier});
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
