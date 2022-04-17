let mongoose = require("mongoose"),
 taskSchema = mongoose.Schema({
    email: String,
    screen_name: String,
    timestamp: String,
    kind: String,
    sub_kind: Number,
    execute_time: Number,
    keyword: String, // for serach follow mode and match retweet
    partner: String, // w.r.t user_id
    retweeted_timeline: Number, // 0 => the first one, 1 => second
    ongoing: Boolean
});

module.exports = mongoose.model("Task", taskSchema, 'task');