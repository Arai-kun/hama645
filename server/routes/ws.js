let express = require('express');
let router = express.Router();
//let twitterWebhooks = require('twitter-webhooks');
let Twitter = require('../models/twitter');
//let app = express();

const request = require('request');
const TWITTER_API_URI = 'https://api.twitter.com/1.1/';
const ENVIRONMENT = process.env.ENVIRONMENT;
let twitterServerTimeOffset = 0;

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
	
	subscribe({
		userId: tw.user_id,
		accessToken: tw.oauth_token,
		accessTokenSecret: tw.oauth_token_secret
	})
	.then(res => console.log(res))
	.catch(error => console.log(error));

	ws.on('message', (msg) => {
		console.log('message');
		if(msg.text === 'pplling'){
			ws.send({text: 'update', timestamp: 'date'});
		}
		//ws.send(msg);
	});

	ws.on('close', async () => {
		console.log('close');
		unsubscribe({
			userId: tw.user_id,
			accessToken: tw.oauth_token,
			accessTokenSecret: tw.oauth_token_secret
		})
		.then(res => console.log(res))
		.catch(error => console.log(error));
	});
});

router.get('/update/:id', (req, res, next) => {
	res.json({text: 'polling', timestamp: 'date'});
});

router.delete('/delete/:id', (req, res, next) => {
	Twitter.findOne({email: req.user['email'], screen_name: req.params.id}, (error, twitter) => {
		if(error) next(error);
		console.log('close');
		unsubscribe({
			userId: twitter.user_id,
			accessToken: twitter.oauth_token,
			accessTokenSecret: twitter.oauth_token_secret
		})
		.then(res => {
			console.log(res);
			res.json(true);
		})
		.catch(error => {
			next(error);
		});
	});
});

router.get('/create/:id', (req, res, next) => {
	Twitter.findOne({email: req.user['email'], screen_name: req.params.id}, (error, twitter) => {
		if(error) next(error);
		console.log('create');
		subscribe({
			userId: twitter.user_id,
			accessToken: twitter.oauth_token,
			accessTokenSecret: twitter.oauth_token_secret
		})
		.then(res => {
			console.log(res);
			res.json(true);
		})
		.catch(error => {
			next(error);
		});
	});
})

function subscribe(args = {}) {
	const options = prepareUserContextRequest(args);

	args = Object.assign({}, args);
	options.uri = `${TWITTER_API_URI}account_activity/all/${ENVIRONMENT}/subscriptions.json`;
	options.method = 'POST';

	return sendApiRequest(options);
}

function unsubscribe (args = {}) {
	const options = prepareUserContextRequest(args);

	options.uri = `${TWITTER_API_URI}account_activity/all/${ENVIRONMENT}/subscriptions.json`;
	options.method = 'DELETE';

	return sendApiRequest(options);
}

function prepareUserContextRequest(args) {
	if (!args.userId) throw new Error('Twitter webhooks : You must provide userId');
	if (!args.accessToken) throw new Error('Twitter webhooks : You must provide user accessToken');
	if (!args.accessTokenSecret) throw new Error('Twitter webhooks : You must provide user accessTokenSecret');

	return {
		json: true,
		oauth: {
			consumer_key: process.env.API_KEY,
			consumer_secret: process.env.API_SECRET,
			token: args.accessToken,
			token_secret: args.accessTokenSecret,
			timestamp: Math.floor((Date.now() + twitterServerTimeOffset) / 1000).toString()
		}
	};
}

function sendApiRequest(options) {
	return new Promise((resolve, reject) => {
		request(options, (error, response, json) => {
			if (error) {
				error.statusCode = -1;
				return reject(error);
			}
			if (response.statusCode >= 200 && response.statusCode < 300) {
				resolve(response);
			} else {
				if (Array.isArray(json.errors)) {
					error = new Error(json.errors[0].message);
					error.code = json.errors[0].code;
				} else {
					error = new Error(response.statusMessage);
					error.code = -1;
				}
				error.statusCode = response.statusCode;
				error.body = json;
				reject(error);
			}
		});
	});
}



module.exports = router;