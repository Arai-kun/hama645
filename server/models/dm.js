let mongoose = require("mongoose"),
 dmSchema = mongoose.Schema({
    email: String,
    screen_name: String,
    id: String,
    created_timestamp: String,
    sender_id: String,
    text: String
});

module.exports = mongoose.model("Dm", dmSchema, 'dm');