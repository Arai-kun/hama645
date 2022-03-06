let express = require('express');
let router = express.Router();

router.ws('/:id', (ws, req) => {
	/* Connected */
	console.log('ws');
	ws.on('message', (msg) => {
		console.log('message');
		ws.send(msg);
	});
});

module.exports = router;