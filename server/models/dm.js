let mongoose = require("mongoose"),
 dmSchema = mongoose.Schema({
    screen_name: String,
    screen_name: String,
    user_id: String,
    oauth_token: String,
    oauth_token_secret: String,
    authorized: Boolean
});

module.exports = mongoose.model("DM", dmSchema, 'dm');