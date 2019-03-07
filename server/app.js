const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const ewosRoutes = require("./routes/ewos");
const userRoutes = require("./routes/users");
const loginRoutes = require("./routes/login");

const app = express();


mongoose
.connect('mongodb://topelf:rpw4NIC@ds213255.mlab.com:13255/ewo_db', {
    useNewUrlParser: true, useCreateIndex: true
  })
  .then(() => {
    console.log("Boom goes the dynomite!");
  })
  .catch(() => {
    console.log("Danger Will Roberson, db connection error!");
  });
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use('/uploads', express.static(path.join('server/uploads')));

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
app.use("/api/users/", userRoutes);
app.use("/api/login/", loginRoutes);

module.exports = app;
