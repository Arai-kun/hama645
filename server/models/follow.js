let mongoose = require("mongoose"),
 followSchema = mongoose.Schema({
    email: String,
    screen_name: String,
    user_id: String,
    keyword: String,
    range_min: Number,
    range_max: Number,
    count_max: Number,
    status: Number,
    since_id: String
});

module.exports = mongoose.model("Follow", followSchema, 'follow');