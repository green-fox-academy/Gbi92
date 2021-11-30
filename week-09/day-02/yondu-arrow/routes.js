'use strict';

const express = require('express');
const app = express();

const { validateInput } = require('./validateInput');

app.get('/yondu', (req, res) => {
  if (validateInput(req.query.distance) === false || validateInput(req.query.time) === false) {
    res.status(400).json({ error: 'Please provide valid distance and time'});
    return;
  }

  let speed = req.query.distance / req.query.time;

  res.status(200).json({
    distance: req.query.distance,
    time: req.query.time,
    speed: speed
  });
});

module.exports = app;