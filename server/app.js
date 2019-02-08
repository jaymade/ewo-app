const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const ewosRoutes = require("./routes/ewos");

const app = express();

mongoose
.connect('mongodb://topelf:rpw4NIC@ds213255.mlab.com:13255/ewo_db', {
    useNewUrlParser: true
  })
  .then(() => {
    console.log("Boom goes the dynomite!");
  })
  .catch(() => {
    console.log("Danger Will Roberson, db connection error!");
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});

app.use("/api/ewos/", ewosRoutes);

module.exports = app;
