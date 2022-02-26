let mongoose = require("mongoose"),
 dmSchema = mongoose.Schema({
    screen_name: String,
    id: String,
    created_timestamp: String
});

module.exports = mongoose.model("DM", dmSchema, 'dm');