let express = require('express');
let router = express.Router();
const crypto = require('crypto');
let Dm = require('../models/dm');
let Twitter = require('../models/twitter');


router.get('/', (req, res, next) => {
	if (req.query.crc_token) {
		console.log({
			response_token: crypto.createHmac('sha256', process.env.API_SECRET).update(req.query.crc_token).digest('base64')
		});
		return res.json({
			response_token: 'sha256=' + crypto.createHmac('sha256', process.env.API_SECRET).update(req.query.crc_token).digest('base64')
		});
	}
})

router.post('/', async (req, res, next) => {
	res.sendStatus(200);
	console.log(req.body);
	if(req.body.direct_message_events){
		try {
			let twitters = await Twitter.find({user_id: req.body.for_user_id}).exec();
			for(let twitter of twitters){
				console.log('webhook dm data lenght: ' + request.body.direct_message_events.length);
				for(let data of request.body.direct_message_events){
					await Dm.create({
						email: twitter.email,
						screen_name: twitter.screen_name,
						id: data.id,
						created_timestamp: data.created_timestamp,
						sender_id: data.message_create.sender_id,
						recipient_id: data.message_create.target.recipient_id,
						text: data.message_create.message_data.text,
					});
				}
			}
		}
		catch(error){
			next(error);
		}
	}
});

module.exports = router;