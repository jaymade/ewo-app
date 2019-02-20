const express = require("express");
const Ewo = require("../models/ewo");
const router = express.Router();

// post ewo
router.post('', (req, res, next) => {
  const ewo = new Ewo({
    startDate: req.body.startDate,
    starter: req.body.starter,
    title: req.body.title,
    descript: req.body.descript,
    status: req.body.status
  });
  ewo.save().then(createdEWO => {
    // console.log('EWO save info', createdEWO);
    res.status(201).json({
      message: 'WOOT! The EWO was added succesfully!',
      ewoId: createdEWO._id
    });
  });
  // console.log('EWO sent to server: ', ewo);
});

// put an updated ewo
router.put("/:id", (req, res, next) => {
  const ewo = new Ewo({
    _id: req.body._id,
    startDate: req.body.startDate,
    starter: req.body.starter,
    title: req.body.title,
    descript: req.body.descript,
    status: req.body.status,
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
