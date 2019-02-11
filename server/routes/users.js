const express = require("express");
const User = require("../models/user");
const router = express.Router();

// post ewo
router.post('', (req, res, next) => {
  const user = new User({
    userId: req.body.userId,
    pw: req.body.descript,
    eng: req.body.eng,
    admin: req.body.admin,
    status: req.body.status
  });
  ewo.save().then(createdUser => {
    // console.log('EWO save info', createdEWO);
    res.status(201).json({
      message: 'WOOT! The User was added succesfully!',
      userId: createdUser._id
    });
  });
  // console.log('User sent to server: ', ewo);
});

// put an updated user
router.put("/:id", (req, res, next) => {
  const ewo = new Ewo({
    _id: req.body._id,
    userId: req.body.userId,
    pw: req.body.pw,
    eng: req.body.eng,
    admin: req.body.admin,
    status: req.body.status,
  });
  User.updateOne({
    _id: req.params.id
  }, user).then(result => {
    res.status(200).json({
      message: "Updated User successful!"
    });
  });
});

// get all users
router.get("", (req, res, next) => {
  User.find().then(documents => {
    res.status(200).json({
      message: 'EWOs fetched from server',
      users: documents
    });
  });
});

// get a user by ID
router.get("/:id", (req, res, next) => {
  User.findById(req.params.id).then(user => {
    if (user) {
      res.status(200).json(ewo);
    } else {
      res.status(404).json({
        message: "User not found!"
      });
    }
  });
});

// delete user by ID
router.delete('/:_id', (req, res, next) => {
  console.log('Check _id', req.params);
  User.deleteOne({
      _id: req.params._id
    })
    .then(result => {
      console.log(result);
      res.status(200).json({
        message: "Yo, deleted that User!"
      });
    });
});

module.exports = router;
