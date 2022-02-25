let mongoose = require("mongoose"),
 twitterSchema = mongoose.Schema({
    email: String,
    id: String,
    oauth_token: String,
    oauth_token_secret: String,
});

module.exports = mongoose.model("Twitter", twitterSchema, 'twitter');