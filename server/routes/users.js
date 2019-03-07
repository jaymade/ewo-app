const express = require("express");
const jwt = require('jsonwebtoken');
const User = require("../models/user");
const router = express.Router();

// post user
router.post('', (req, res, next) => {
  const user = new User({
    uname: req.body.uname,
    pw: req.body.pw,
    eng: req.body.eng,
    admin: req.body.admin,
    active: req.body.active
  });
  user.save().then(createdUser => {
    console.log('save user info to DB', createdUser);
    res.status(201).json({
      message: 'WOOT! The User was added succesfully!',
      userId: createdUser._id
    });
  });

  // console.log('User sent to server: ', user);
});

// put an updated user
router.put("/:id", (req, res, next) => {
  const user = new User({
    _id: req.body._id,
    uname: req.body.uname,
    pw: req.body.pw,
    eng: req.body.eng,
    admin: req.body.admin,
    active: req.body.active,
  });
  User.updateOne({
    _id: req.params.id
  }, user).then(result => {
    res.status(200).json({
      message: " User Updated successful!"
    });
  });
});

// get all users
router.get("", (req, res, next) => {
  User.find().then(documents => {
    res.status(200).json({
      message: 'Users fetched from server',
      users: documents
    });
  });
});

// get a user by ID
router.get("/:id", (req, res, next) => {
  User.findById(req.params.id).then(user => {
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({
        message: "User not found!"
      });
    }
  });
});

// delete user by ID
router.delete('/:_id', (req, res, next) => {
  // console.log('Check _id', req.params);
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
router.post('/login', (req, res, nect) => {
  User.findOne({
      uname: req.body.uname
    })
    // check form pw to user pw in DB
    .then(user => {
      if (!user) {
        return res.status(401).json({
          message: "Auth FAILED!"
        });
      }
      console.log('Auth Login T/F: ', res.body.pw === user.pw);
      return checkPW(res.body.pw === user.pw);
    })
    // know you have a valid pw from user
    .then(result => {
      if (!result) {
        return res.status(401).json({
          message: "Auth FAILED!"
        });
      }
      const token = jwt.sign({
          uname: user.uname,
          userId: user._id
        },
        'averylongsecretformakingjsonwebtoken', {
          expiresIn: '1h'
        }
      );
      res.status(200).json({
        token: token,
        message: 'Attaboy, Token Made!'

      })
    })
    .catch(err => {
      return res.status(401).json({
        message: "Auth FAILED!"
      });
    });
});


module.exports = router;
