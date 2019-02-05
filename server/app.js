const express = require('express');
const app = express();
// const bodyParser = require('body-parser');

// app.use(bodyParser.json());
app.use((req, res, next) => {
  console.log('Hello from 1st middleware');
  next();
});
app.use((req, res, next) => {
 res.send('hello from Xpress ');
});


module.exports = app;
