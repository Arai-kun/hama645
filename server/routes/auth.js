let express = require('express');
let router = express.Router();
let TwitterClient = require('twitter-api-client').TwitterClient;

const twitterClient = new TwitterClient({
  apiKey: process.env.API_KEY,
  apiSecret: process.env.API_SECRET,
  accessToken: process.env.ACCESS_TOKEN,
  accessTokenSecret: process.env.ACCESS_TOKEN_SECRET
});

/* GET auth/requestToken */
router.get('/requestToken', async (req, res, next) => {
  try{
    let response = await twitterClient.basics.oauthRequestToken(encodeURI('https://enginestarter.nl/dmtool/auth'));
    console.log(response);
    res.json('success');
  }
  catch(error){
    console.log(error);
    res.sendStatus(500);
  }
  
});

module.exports = router;
