var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');


var db = mongoose.connect('mongodb://topelf:rpw4NIC@ds213255.mlab.com:13255/ewo_db', function (err, res) {
  if (err) {
    console.log(err);
  } else {
    console.log('conected to DB' );
  }
});

var app = express();
app.use(bodyParser());
app.use(bodyParser.json({
  limit: '5mb'
}));
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(function (req, res, next) {
  res.setHeader('Access-Controle-Allow-Origin', 'http://localhost:4200');
  res.setHeader('Access-Controle-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Controle-Allow-Header', 'X-Requested-With, content-type');
  res.setHeader('Access-Controle-Allow-Credentials', true);
  next();
});

var Schema = mongoose.Schema;


app.listen(8080, function () {
  console.log("app is listening in port 8080");
});
