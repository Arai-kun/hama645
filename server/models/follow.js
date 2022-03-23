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
    status_now: Number,
    maxed: Boolean
});

module.exports = mongoose.model("Follow", followSchema, 'follow');