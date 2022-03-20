let mongoose = require("mongoose"),
 followedSchema = mongoose.Schema({
    email: String,
    screen_name: String,
    timestamp: String,
    followed_user_id: String
});

module.exports = mongoose.model("Followed", followedSchema, 'followed');