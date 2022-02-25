let express = require('express');
let router = express.Router();
let bcrypt = require('bcrypt');
let passport = require('passport');
let User = require('../models/user');
const saltRounds = 10;

/* POST user/create */
router.post('/create', (req, res, next) => {
  bcrypt.hash(req.body['password'], saltRounds, (error, hash) => {
      if(error) next(error);
      req.body['password'] = hash;
      User.create(req.body, error => {
          if(error) next(error);
          res.json(true);
      });
  });
});

/* POST user/login. */
router.post('/login', passport.authenticate('local', { session: true }), (req, res) => {
  res.json(true);
});

/* GET user/exist/:email */
router.get('/exist/:email', (req, res, next) => {
  User.findOne({email: req.params.email}, (error, user) => {
      if(error) next(error);
      if(!user){
          res.json(false);
      }
      else{
          res.json(true);
      }
  });
});

/* GET user/check */
router.get('/check', (req, res, next) => {
  if(req.isAuthenticated()){
    res.json(true);
  }
  else{
    res.json(false);
  }
});

/* GET user/logout */
router.get('/logout', (req, res, next) => {
  req.logout();
  res.json(true);
});

module.exports = router;
