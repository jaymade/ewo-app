// Define schema
var mongoose = require("mongoose");
var ewoSchema = mongoose.Schema({
  // userId: {
  //   type: String
  // },
  ewoId: {
    type: Number
  },
  title: {
    type: String,
    required: true
  },
  descript: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true
  }
});

// Compile model from schema
module.exports = mongoose.model('Ewo', ewoSchema);
