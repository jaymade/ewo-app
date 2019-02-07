const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb://topelf:rpw4NIC@ds213255.mlab.com:13255/ewo_db', {
    useNewUrlParser: true
  })
  .then(() => {
    console.log("Boom goes the dynomite!");
  })
  .catch(() => {
    console.log("Danger Will Roberson, db error!");
  });

// const cors = require('cors');
const User = require('./models/user');
const EWO = require('./models/ewo');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS");
  next();
});

app.post('/api/ewos', (req, res, next) => {
  const ewo = new EWO({
    title: req.body.title,
    descript: req.body.descript,
    status: req.body.status
  });
  ewo.save().then(createdEWO => {
    // console.log('EWO save info', createdEWO);
    res.status(201).json({
      message: 'WOOT! The EWO was added succesfully!',
      ewoId: createdEWO._id
    });
  });
  // console.log('EWO sent to server: ', ewo);
});

app.put('/api/ewos/:id', (req, res, next) => {
  const ewo = new Ewo({
    title: req.body.title,
    descript: req.body.descript,
    status: req.body.status,
  });
  EWO.updateOne({
    _id: req.params._id,
    ewo
  }).then(result => {
    console.log('update result: ', result);
    res.status(200).json({
      message: "Roger Roger!"
    });
  });

});

app.get('/api/ewos', (req, res, next) => {
  EWO.find().then(documents => {
    res.status(200).json({
      message: 'EWOs fetched from server',
      ewos: documents
    });
  });
});
app.delete('/api/ewos/:_id', (req, res, next) => {
  console.log('Check _id', req.params);
  EWO.deleteOne({
      _id: req.params._id
    })
    .then(result => {
      console.log(result);
      res.status(200).json({
        message: "Yo, deleted that EWO for ya!"
      });
    });
});

module.exports = app;
