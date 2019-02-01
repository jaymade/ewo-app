// Define schema
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  userId: "string",
  pw: "string",
  eng: "boolean",
  admin: "boolean",
  active: "boolean"
});

// Compile model from schema
var User = mongoose.model('User', UserSchema);
