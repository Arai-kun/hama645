let express = require('express');
let router = express.Router();

router.post('/', (req, res, next) => {
	console.log(req.body);
	res.sendStatus(200);
});

module.exports = router;