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
  custName: {
    type: String
  },
  custContact: {
    type: String
  },
  needDate: {
    type: String
  },
  partNum: {
    type: String
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
  assignment: {
    type: String
  },
  lastupdated: {
    type: String
  },
  timestamp: {
    type: String
  },
  completed: {
    type: String
  },
  hours: {
    type: String
  },
  imagePath: {
    type: String
  },
  ewoid: {
    type: Number
  }
});

// Compile model from schema
module.exports = mongoose.model('Ewo', ewoSchema);
