const express = require('express');
const bodyParser = require('body-parser');
const app = express();
var cors = require('cors');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(cors());

app.post('/api/ewos', (req, res, next) => {
  const ewo = req.body;
  console.log('EWO info sent to server: ', ewo);
  res.status(201).json({
    message: 'WOOT! The EWO was added succesfully!',
    ewo: ewo
  });
});

app.get('/api/ewos', (req, res, next) => {
  const ewos = [{
      id: 'sdfsdfsdfsdf',
      title: 'First EWO',
      descript: 'comming from Server',
      status: 'active'
    },
    {
      id: 'eryeryrtyertyert',
      title: 'Second EWO',
      descript: '2nd EWO comming from Server',
      status: 'active'
    },
    {
      id: 'qweqwert',
      title: 'Third EWO',
      descript: '3rd EWO comming from Server',
      status: 'closed'
    }

  ];
  res.status(200).json({
    message: 'EWOs fetched from server',
    ewos: ewos
  });
});


module.exports = app;
