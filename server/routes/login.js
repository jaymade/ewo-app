const express = require("express");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require("../models/user");

const router = express.Router();


router.post('', (req, res, nect) => {
  let fetchedUser;
  User.findOne({
      uname: req.body.uname
    })
    // check form pw to user pw in DB
    .then(user => {
      // check user (fromDB)
      // console.log(user);
      if (!user) {
        return res.status(401).json({
          message: "Auth FAILED!"
        });
      }
      fetchedUser = user;
      // console.log('FE', req.body.pw);
      // console.log('BE', user.pw);
      // console.log("TEST: ", test(req.body.pw, user.pw));
      return test(req.body.pw, user.pw);
    })
    // know you have a valid pw from user
    .then(result => {
      // check result
      // console.log('RESULT: ', result);
      if (!result) {
        return res.status(401).json({
          message: "Auth FAILED!"
        });
      }
      const token = jwt.sign({
          uname: fetchedUser.uname,
          userId: fetchedUser._id,

        },
        'a_very_long_Secret_for_making_A_json_Webtoken', {
          expiresIn: '1h'
        }

      );
      console.log('TOKEN', token);
      res.status(200).json({
        token: token,
        eng: fetchedUser.eng,
        admin: fetchedUser.admin,
        message: 'Attaboy, a Token was Made!',
      });
    })
    .catch(err => {
      console.log('ERROR', err);
      return res.status(401).json({
        message: "Auth FAILED!"
      });
    });
});

function test(a, b) {
  if (a === b) {
    return true;
  } else {
    return false;
  }
}

module.exports = router;
