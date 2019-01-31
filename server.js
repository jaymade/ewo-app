var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var User = require('./server/models/user');
var Ewo = require('./server/models/ewo');

var db = mongoose.connect('mongodb://topelf:rpw4NIC@ds213255.mlab.com:13255/ewo_db', function (err, res) {
  if (err) {
    console.log(err);
  } else {
    console.log('conected to DB' );
  }
});
var Schema = mongoose.Schema;

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


app.post("/api/saveUser", function (req, res) {
  var mod = new User(req.body);
  if (req.body.mode == "Save") {
    mod.save(function (err, data) {
      if (err) {
        res.send(err);
      } else {
        res.send({
          data: "record updated"
        });
      }
    });

  }
});


app.post("/api/deleteUser", function (req, res) {
  User.remove({
    _id: req.body.id
  }, function (err) {
    if (err) {
      res.send(err);
    } else {
      res.send({
        data: "record has been deleted..!!"
      });
    }
  });
});


app.post("/api/getUser", function (req, res) {
  User.find({}, function (err, data) {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  });
});


app.listen(8080, function () {
  console.log("app is listening in port 8080");
});
