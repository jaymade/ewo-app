// server/api.js
/*
 |--------------------------------------
 | Dependencies
 |--------------------------------------
 */

// const jwt = require('express-jwt');


/*
 |--------------------------------------
 | Authentication Middleware
 |--------------------------------------
 */

module.exports = function (app, config) {

  // GET API root
  app.get('/api/', (req, res) => {
    res.send('API works');
  });

};
