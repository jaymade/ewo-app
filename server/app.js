const express = require('express');
const app = express();
var cors = require('cors');
// const bodyParser = require('body-parser');
app.use(cors());

app.use('/api/ewos', (req, res, next) => {
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
