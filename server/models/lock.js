let mongoose = require("mongoose"),
 lockSchema = mongoose.Schema({
    email: String,
    screen_name: String,
  });

module.exports = mongoose.model("Lock", lockSchema, 'lock');