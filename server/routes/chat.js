let express = require('express');
let router = express.Router();
let Twitter = require('../models/twitter');
const { TwitterClient } = require('twitter-api-client');
let Dm = require('../models/dm');

const request = require('request');
const TWITTER_API_URI = 'https://api.twitter.com/1.1/';
const ENVIRONMENT = process.env.ENVIRONMENT;
let twitterServerTimeOffset = 0;

router.get('/update/:id/:sub_id', (req, res, next) => {
	Dm.find({email: req.user['email'], screen_name: req.params.id}, (error, dms) => {
		if(error) next(error);
		Twitter.findOne({email: req.user['email'], screen_name: req.params.id}, (error, twitter) => {
			if(error) next(error);
			let data = [];
			for(let dm of dms){
				/* self = true */
				if(dm.sender_id === twitter.user_id && dm.recipient_id === req.params.sub_id){
					data.push({
						id: dm.id,
						self: true,
						text: dm.text,
						timestamp: dm.created_timestamp
					});
				}
				/* self = false */
				else if(dm.sender_id === req.params.sub_id && dm.recipient_id === twitter.user_id){
					data.push({
						id: dm.id,
						self: false,
						text: dm.text,
						timestamp: dm.created_timestamp
					});
				}
				else{
					// Ignore
				}
			}
			res.json(data);
		})
	});
});

router.post('/send/:id/:sub_id', async (req, res, next) => {
	try {
		let twitter = await Twitter.findOne({email: req.user['email'], screen_name: req.params.id}).exec();
		const twitterClient = new TwitterClient({
			apiKey: process.env.API_KEY,
			apiSecret: process.env.API_SECRET,
			accessToken: twitter.oauth_token,
			accessTokenSecret: twitter.oauth_token_secret
		});
		console.log(req.body);
		/* Rate limit 1000 per 24h (user) */
		await twitterClient.directMessages.eventsNew({
			event: {
				type: 'message_create',
				message_create: {
					target: {
						recipient_id: req.params.sub_id
					},
					message_data: {
						text: req.body['text']
					}
				}
			}
		});
		res.json(true);
	}
	catch(error){
		next(error);
	}
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
		.then(() => {
			console.log(`[${req.user['email']}] Subscription deleted: ${twitter.screen_name}`);
			Twitter.updateOne({email: req.user['email'], screen_name: twitter.screen_name}, {$set: {subsc: false}}, error => {
				if(error) next(error);
				res.json(true);
			});
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
		.then(() => {
			console.log(`[${req.user['email']}] Subscription created: ${twitter.screen_name}`);
			Twitter.updateOne({email: req.user['email'], screen_name: twitter.screen_name}, {$set: {subsc: true}}, error => {
				if(error) next(error);
				res.json(true);
			});
		})
		.catch(error => {
			next(error);
		});
	});
});

router.get('/dmUserList/:id', async (req, res, next) => {
	try {
		let data = [];
		let dms = await Dm.find({email: req.user['email'], screen_name: req.params.id}).exec();
		let twitter = await Twitter.findOne({email: req.user['email'], screen_name: req.params.id}).exec();
		let dmUserIds = [];
		dms.forEach(dm => {
			if(!dmUserIds.includes(dm.sender_id)){
				dmUserIds.push(dm.sender_id);
			}
			if(!dmUserIds.includes(dm.recipient_id)){
				dmUserIds.push(dm.recipient_id);
			}
		});
		dmUserIds = dmUserIds.filter(el => el !== twitter.user_id);

		const twitterClient = new TwitterClient({
			apiKey: process.env.API_KEY,
			apiSecret: process.env.API_SECRET,
			accessToken: twitter.oauth_token,
			accessTokenSecret: twitter.oauth_token_secret
		});

		for(let userId of dmUserIds){
			/* Rate limit 900 per 15 min (user) */
			let response = await twitterClient.accountsAndUsers.usersShow({user_id: userId});
			data.push({
				userId: response.id_str,
				screenName: response.screen_name
			});
		}
		res.json(data);
	}
	catch(error){
		next(error);
	}

	/*
	Dm.find({email: req.user['email'], screen_name: req.params.id}, (error, dms) => {
		if(error) next(error);
		Twitter.findOne({email: req.user['email'], screen_name: req.params.id}, (error, twitter) => {
			if(error) next(error);
			let dmUserList = [];
			dms.forEach(dm => {
				if(!dmUserList.includes(dm.sender_id)){
					dmUserList.push(dm.sender_id);
				}
				if(!dmUserList.includes(dm.recipient_id)){
					dmUserList.push(dm.recipient_id);
				}
			});
			dmUserList = dmUserList.filter(el => el !== twitter.user_id);
			res.json(dmUserList);
		});
	});*/
});

router.get('/screenName/:id/:sub_id', async (req, res, next) => {
	try {
		let twitter = await Twitter.findOne({email: req.user['email'], screen_name: req.params.id}).exec();
		const twitterClient = new TwitterClient({
			apiKey: process.env.API_KEY,
			apiSecret: process.env.API_SECRET,
			accessToken: twitter.oauth_token,
			accessTokenSecret: twitter.oauth_token_secret
		});
		/* Rate limit 900 per 15 min (user) */
		let response = await twitterClient.accountsAndUsers.usersShow({user_id: req.params.sub_id});
		res.json({text: response.screen_name});
	}
	catch(error){

	}

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