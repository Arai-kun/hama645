let mongoose = require("mongoose"),
 rateSchema = mongoose.Schema({
    screen_name: String,
    latest_request_time: String
});

module.exports = mongoose.model("Rate", rateSchema, 'rate');