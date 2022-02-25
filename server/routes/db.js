let express = require('express');
let router = express.Router();
let Twitter = require('../models/twitter');

/* GET db/twitter/:screen_name */
router.get('/twitter/:screen_name', (req, res, next) => {
    Twitter.findOne({screen_name: req.params.screen_name}, (error, twitter) => {
        if(error) next(error);
        res.json(twitter);
    });
});

/* GET db/twitters */
router.get('/twitters', (req, res, next) => {
    Twitter.find({}, (error, twitters) => {
      if(error) next(error);
      res.json(twitters);
    });
  });

/* POST db/twitter */
router.post('/twitter', (req, res, next) => {
    console.log(req.body)
    Twitter.create({
        email: req.user['email'],
        screen_name: req.body['screen_name'],
        authorized: req.body['authorized']
    }, error => {
        if(error) next(error);
        res.json(true);
    });
});

module.exports = router;