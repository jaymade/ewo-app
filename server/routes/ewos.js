const express = require("express");
const multer = require("multer");

const Ewo = require("../models/ewo");
const checkAuth = require("../middleware/check-auth");

const router = express.Router();
const MIME_TYPE_MAP = {
  'image/png': 'png',
  'image/jpg': 'jpg',
  'image/jpeg': 'jpeg',
  'application/pdf': 'pdf'
};

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const isValid = MIME_TYPE_MAP[file.mimetype];
    let error = new Error('Invalid MiMeTyPe');
    if (isValid) {
      error = null;
    }
    cb(null, 'server/uploads/');

  },
  filename: (rew, file, cb) => {
    const name = file.originalname.toLowerCase().split(' ').join('-');
    const ext = MIME_TYPE_MAP[file.mimetype];
    cb(null, name + '-' + Date.now() + '.' + ext);
  }
});

// post ewo
router.post('', multer({storage: storage}).single('image'), (req, res, next) => {
  const url = req.protocol + '://' + req.get('host');

  const ewo = new Ewo({
    startDate: req.body.startDate,
    starter: req.body.starter,
    team: req.body.team,
    reqtype: req.body.reqtype,
    partNum: req.body.partNum,
    newPart: req.body.newPart,
    priority: req.body.priority,
    title: req.body.title,
    descript: req.body.descript,
    status: req.body.status,
    eoq: req.body.eoq,
    asq: req.body.asq,
    moq: req.body.moq,
    oqp: req.body.oqp,
    vendnum: req.body.vendnum,
    leadtime: req.body.leadtime,
    assignment: req.body.assignment,
    lastupdated: req.body.lastupdated,
    timestamp: req.body.timestamp,
    completed: req.body.completed,
    hours: req.body.hours,
    imagePath: req.file ? (url + '/uploads/' + req.file.filename) : ''
  });
  ewo.save().then(createdEWO => {
    console.log('EWO save info', createdEWO);
    res.status(201).json({
      message: 'WOOT! The EWO was added succesfully!',
      ewo: {
        ...createdEWO,
        id: createdEWO._id
      }
    });
  });
  console.log('EWO sent to server: ', ewo);
});

// put an updated ewo
router.put("/:id", (req, res, next) => {
  const ewo = new Ewo({
    _id: req.body._id,
    startDate: req.body.startDate,
    starter: req.body.starter,
    team: req.body.team,
    reqtype: req.body.reqtype,
    newPart: req.body.newPart,
    priority: req.body.priority,
    title: req.body.title,
    descript: req.body.descript,
    status: req.body.status,
    eoq: req.body.eoq,
    asq: req.body.asq,
    moq: req.body.moq,
    oqp: req.body.oqp,
    vendnum: req.body.vendnum,
    leadtime: req.body.leadtime,
    assignment: req.body.assignment,
    lastupdated: req.body.lastupdated,
    timestamp: req.body.timestamp,
    completed: req.body.completed,
    hours: req.body.hours,
  });
  Ewo.updateOne({
    _id: req.params.id
  }, ewo).then(result => {
    res.status(200).json({
      message: "EWO Updated  successful!"
    });
  });
});

// get all ewos
router.get("", (req, res, next) => {
  Ewo.find().then(documents => {
    res.status(200).json({
      message: 'EWOs fetched from server',
      ewos: documents
    });
  });
});

// get a ewo by ID
router.get("/:id", (req, res, next) => {
  Ewo.findById(req.params.id).then(ewo => {
    if (ewo) {
      res.status(200).json(ewo);
    } else {
      res.status(404).json({
        message: "EWO not found!"
      });
    }
  });
});

// delete ewo by ID
router.delete('/:_id', (req, res, next) => {
  // console.log('Check _id', req.params);
  Ewo.deleteOne({
      _id: req.params._id
    })
    .then(result => {
      console.log(result);
      res.status(200).json({
        message: "Yo, deleted that EWO for ya!"
      });
    });
});

module.exports = router;
