let express = require('express');
let router = express.Router();
let twitterWebhooks = require('twitter-webhooks');
let Twitter = require('../models/twitter');
let app = express();

/*
const userActivityWebhook = twitterWebhooks.userActivity({
  serverUrl: process.env.SERVER_URL,
  route: '/webhook',
  consumerKey: process.env.API_KEY,
  consumerSecret: process.env.API_SECRET,
  accessToken: process.env.ACCESS_TOKEN,
  accessTokenSecret: process.env.ACCESS_TOKEN_SECRET,
  environment: 'dev',
});*/
//userActivityWebhook.register();

router.ws('/:id', async (ws, req) => {
	/* Connected */
	console.log('connected');
	let tw = {
		user_id: '',
		oauth_token: '',
		oauth_token_secret: ''
	}
	try {
		let twitter = await Twitter.findOne({email: req.user['email'], screen_name: req.params.id}).exec();
		tw.user_id = twitter.user_id;
		tw.oauth_token = twitter.oauth_token;
		tw.oauth_token_secret = twitter.oauth_token_secret;
	}
	catch(error) {
		next(error);
	}

	const userActivityWebhook = twitterWebhooks.userActivity({
		serverUrl: process.env.SERVER_URL,
		route: '/webhook',
		consumerKey: process.env.API_KEY,
		consumerSecret: process.env.API_SECRET,
		accessToken: process.env.ACCESS_TOKEN,
		accessTokenSecret: process.env.ACCESS_TOKEN_SECRET,
		environment: 'dev',
		app: app
	});
	
	/*
	userActivityWebhook.subscribe({
		userId: tw.user_id,
		accessToken: tw.oauth_token,
		accessTokenSecret: tw.oauth_token_secret
	})
	.then(userActivity => {
		userActivity.on('direct_message', data => {
			console.log(data);
			ws.send({text: 'Receive msg', date: 'date'});
		});
	});*/

	ws.on('message', (msg) => {
		console.log('message');
		ws.send(msg);
	});

	ws.on('close', async () => {
		console.log('close');
		await userActivityWebhook.unsubscribe({
			userId: tw.user_id,
			accessToken: tw.oauth_token,
			accessTokenSecret: tw.oauth_token_secret
		});
	});
});


module.exports = router;