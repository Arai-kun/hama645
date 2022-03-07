let mongoose = require("mongoose"),
 systemSchema = mongoose.Schema({
    email: String,
    screen_name: String,
});

module.exports = mongoose.model("System", systemSchema, 'system');