let mongoose = require("mongoose"),
 retweetedSchema = mongoose.Schema({
    email: String,
    screen_name: String,
    user_id: String,
});

module.exports = mongoose.model("Retweeted", retweetedSchema, 'retweeted');