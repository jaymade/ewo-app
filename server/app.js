// server/api.js
var User = require('./server/models/user');
var Ewo = require('./server/models/ewo');


module.exports = function (app, config) {

  // GET API root
  app.get('/api/', (req, res) => {
    res.send('API works');
  });

  app.post("/api/saveUser", function (req, res) {
    var mod = new User(req.body);
    if (req.body.mode == "Save") {
      mod.save(function (err, data) {
        if (err) {
          res.send(err);
        } else {
          res.send({
            data: "record updated"
          });
        }
      });
    }
  });


  app.post("/api/deleteUser", function (req, res) {
    User.remove({
      _id: req.body.id
    }, function (err) {
      if (err) {
        res.send(err);
      } else {
        res.send({
          data: "record has been deleted..!!"
        });
      }
    });
  });


  app.post("/api/getUser", function (req, res) {
    User.find({}, function (err, data) {
      if (err) {
        res.send(err);
      } else {
        res.send(data);
      }
    });
  });


};
