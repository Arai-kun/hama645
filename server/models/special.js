let mongoose = require("mongoose"),
 specialSchema = mongoose.Schema({
    email: String,
    screen_name: String,
    user_id: String,
});

module.exports = mongoose.model("Special", specialSchema, 'special');