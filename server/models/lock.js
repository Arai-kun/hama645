let mongoose = require("mongoose"),
 lockSchema = mongoose.Schema({
    email: String,
    scree_name: String,
  });

module.exports = mongoose.model("Lock", lockSchema, 'lock');