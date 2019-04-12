const express = require('express');
const path = require('path');

const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const ewosRoutes = require("./routes/ewos");
const userRoutes = require("./routes/users");
const loginRoutes = require("./routes/login");

const app = express();


mongoose
  // .connect(process.env.MONGODB_URI || "mongodb://localhost:27017/ewo_db", {
  // .connect('mongodb://topelf:rpw4NIC@ds213255.mlab.com:13255/ewo_db', {
  .connect("mongodb://172.16.1.50:27017/ewos_db", {
    useNewUrlParser: true,
    useCreateIndex: true
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
app.use('/uploads', express.static(path.join(__dirname, 'ewo-api/uploads')));
app.use('/', express.static(path.join(__dirname, 'angular')));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, Accept, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Request-Method, Access-Control-Request-Headers"
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
app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, 'angular', 'index.html'));
});


module.exports = app;
