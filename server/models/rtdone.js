let mongoose = require("mongoose"),
 rtdoneSchema = mongoose.Schema({
    email: String,
    screen_name: String,
    timestamp: String,
    retweeted_id: String
});

module.exports = mongoose.model("Rtdone", rtdoneSchema, 'rtdone');