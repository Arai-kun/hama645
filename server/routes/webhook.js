let express = require('express');
let router = express.Router();
const crypto = require('crypto');


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

router.post('/', (req, res, next) => {
	res.sendStatus(200);
	console.log(req.body);
});

module.exports = router;