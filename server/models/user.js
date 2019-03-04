// Define schema
const mongoose = require("mongoose");
const uniq = require("mongoose-unique-validator");

const userSchema = mongoose.Schema({
  uname: {
    type: String,
    required: true,
    unique: true
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

// use unique validator
userSchema.plugin(uniq);

// Compile model from schema
module.exports = mongoose.model('User', userSchema);
