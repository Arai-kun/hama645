let mongoose = require("mongoose");
const autoIncrement = require('mongoose-sequence')(mongoose);
let Schema = mongoose.Schema;
let logSchema = new Schema({
    no: Number,
    email: String,
    timestamp: String,
    screen_name: String,
    event: Number,
});

logSchema.plugin(autoIncrement, {id:'email', inc_field: 'no', reference_fields: ['email']});
module.exports = mongoose.model("Log", logSchema, 'log');