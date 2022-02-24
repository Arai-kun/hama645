let express = require('express');
let router = express.Router();
const { TwitterClient } = require('twitter-api-client');

const twitterClient = new TwitterClient({
  apiKey: process.env.API_KEY,
  apiSecret: process.env.API_SECRET,
  accessToken: process.env.ACCESS_TOKEN,
  accessTokenSecret: process.env.ACCESS_TOKEN_SECRET
});

/* GET auth/requestToken */
router.get('/requestToken', async (req, res, next) => {
  try{
    let response = await twitterClient.basics.oauthRequestToken({oauth_callback: 'https://enginestarter.nl/dmtool/auth'});
    console.log(response);
    res.json('success');
  }
  catch(error){
    console.log(error);
    res.sendStatus(500);
  }
  
});

module.exports = router;
