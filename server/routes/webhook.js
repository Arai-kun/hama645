let express = require('express');
let router = express.Router();
const crypto = require('crypto');
let Dm = require('../models/dm');
let Twitter = require('../models/twitter');


router.get('/', (req, res, next) => {
	if (req.query.crc_token) {
		console.log({
			response_token: crypto.createHmac('sha256', consumerSecret).update(req.query.crc_token).digest('base64')
		});
		return res.json({
			response_token: 'sha256=' + crypto.createHmac('sha256', consumerSecret).update(req.query.crc_token).digest('base64')
		});
	}
})

router.post('/', async (req, res, next) => {
	res.sendStatus(200);
	console.log(req.body);
	if(request.body.direct_message_events){
		const sender_id = data.message_create.sender_id;
		const recipient_id = data.message_create.target.recipient_id;
		
		let twitter = await Twitter.findOne({}).exec();
		for(let data of request.body.direct_message_events){
			await Dm.create({
				email: system.email,
				screen_name: system.screen_name,
				id: data.id,
				created_timestamp: data.created_timestamp,
				sender_id: data.message_create.sender_id,
				text: data.message_create.message_data.text,
			});
		}
	}
});

module.exports = router;