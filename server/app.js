let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');
let mongoose = require('mongoose');
let compression = require('compression');
require('dotenv').config();

if(process.env.MODE === 'LOCAL'){
  mongoose.connect('mongodb://localhost:27017/hama645');
}
else if(process.env.MODE === 'REMOTE'){
  mongoose.connect(
    `mongodb://localhost:27017/${process.env.DB_NAME}?authSource=admin`,
    {
        useNewUrlParser: true,
        user: 'admin',
        pass: process.env.DB_PW
    }
  );
}
let db = mongoose.connection;
db.once('open', () => {
  console.log('Successed connecting to DB');
});

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');
const bcrypt = require('bcrypt');

let User = require('./models/user');

let oauthRouter = require('./routes/oauth');
let userRouter = require('./routes/user');
let dbRouter = require('./routes/db');
let chatRouter = require('./routes/chat');
let webhookRouter = require('./routes/webhook');

let app = express();

app.use(compression());
app.enable('trust proxy');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24,  // 1 day
    secure: false // https => true
  },
  proxy: true
}));
app.use(passport.initialize());
app.use(passport.session());

passport.use('local', new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  session: true,
  //passReqToCallback: true
}, (email, password, done) => {
  User.findOne({email: email}, function(error, user){
    if(error) next(error);
    if(!user){
      //console.log('Invalid name')
      return done(null, false, { message: 'Invalid email' });
    }
    if(!passwordValidator(password, user.password)){
      return done(null, false, { massage: 'Invalid password' });
    }

    //console.log('valid user');
    const authUser = {
      auth: true,
      email: user.email
    };
    return done(null, authUser);
  });
}));

passport.serializeUser((authUser, done) => {
  done(null, authUser);
});
  
passport.deserializeUser((authUser, done) => {
  User.findOne({email: authUser.email}, function(error, user){
      done(error, user);
  })
});

function passwordValidator(reqPassword, dbPassword) {
  return bcrypt.compareSync(reqPassword, dbPassword);
}

/* twitter webhook */
/*
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
//userActivityWebhook.register();
userActivityWebhook.getWebhooks()
.then(res => console.log(JSON.stringify(res)));*/



app.use('/oauth', oauthRouter);
app.use('/user', userRouter);
app.use('/db', dbRouter);
app.use('/chat', chatRouter);
app.use('/webhook/v3', webhookRouter);

app.use(express.static(path.join(__dirname, '../client/dist/client')));
app.use('/*', express.static(path.join(__dirname, '../client/dist/client/index.html')));

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  
  // For debug
  console.log(res.locals.message);
  
  // render the error page
  res.status(err.status || 500);
  res.json('Something error happened!');
});

module.exports = app;
