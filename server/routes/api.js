const express = require('express');
const router = express.Router();
const Users = require('../models/user');
const UserInfo = require('../models/userInfo');
const Ewo = require('../models/event');
const mongoose = require('mongoose');

// Database address
const db = "mongodb://topelf:rpw4NIC@ds213255.mlab.com:13255/ewo_db";

// Connect to the database
mongoose.connect(db, err => {
  if (err) {
    console.error('Error!' + err);
  } else {
    console.log('Connected to Mogodb');
  }
});

router.get('api/ewos', (req, res) => {
  Ewo.find(function (err, ewos) {
    if (err) return next(err);
    res.json(ewos);
  });
}) ;

router.post('/api/users/:id', (req, res) => {
  let id = req.body;
  //find the event, add the user name into the member list
  Ewo .findOne({
    name: join.event
  }, (err, eventJoin) => {
    if (!eventJoin) {
      res.json(join.event + "Not Found")
    } else {
      eventJoin.members.push(join.user);
      eventJoin.save();
    }
  })
})

