// Define schema
var mongoose = require("mongoose");
var ewoSchema = mongoose.Schema({
  startDate: {
    type: String,
    required: true
  },
  starter: {
    type: String,
    required: true
  },
  team: {
    type: String,
    required: true
  },
  reqtype: {
    type: String,
    required: true
  },
  newPart: {
    type: Boolean,
    required: true
  },
  partNum: {
    type: String
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
