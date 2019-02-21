// Define schema
var mongoose = require("mongoose");
var ewoSchema = mongoose.Schema({
  // userId: {
  //   type: String
  // },
  // ewoId: {
  //   type: String
  // },
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
  priority: {
    type: String,
    required: true
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
  },
  eoq: {
    type: String
  },
  asq: {
    type: String
  },
  moq: {
    type: String
  },
  oqp: {
    type: String
  },
  vendnum: {
    type: String
  },
  leadtime: {
    type: String
  },
});

// Compile model from schema
module.exports = mongoose.model('Ewo', ewoSchema);
