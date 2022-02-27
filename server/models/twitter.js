let mongoose = require("mongoose"),
 twitterSchema = mongoose.Schema({
    email: String,
    screen_name: String,
    user_id: String,
    oauth_token: String,
    oauth_token_secret: String,
    authorized: Boolean,
    latest_request_time: String
});

module.exports = mongoose.model("Twitter", twitterSchema, 'twitter');