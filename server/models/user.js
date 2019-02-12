// Define schema
var mongoose = require("mongoose");
var userSchema = mongoose.Schema({
  uname: {
    type: String,
    required: true
  },
  pw: {
    type: String,
    required: true
  },
  eng: {
    type: Boolean
  },
  admin: {
    type: Boolean
  },
  active: {
    type: Boolean,
  }

});

// Compile model from schema
module.exports = mongoose.model('User', userSchema);
