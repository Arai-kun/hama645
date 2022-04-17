let mongoose = require("mongoose"),
 retweetSchema = mongoose.Schema({
    email: String,
    screen_name: String,
    user_id: String,
    range_min: Number,
    range_max: Number,
    count_max: Number,
    status: Number, //待機(0) 実行(1) 最大制限(2) エラー(3)
    mode: Number, //リツイート(0) キーワードRT(1) required keyword
    retweeted_timeline: Number, // 0=>the first one 1=>second
    retweeted_user_ids: [String],
    keyword: String,
});

module.exports = mongoose.model("Retweet", retweetSchema, 'retweet');