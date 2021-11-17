'use strict';

const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.static('assets'));
app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/doubling', (req, res) => {
  if (req.query.input === undefined) {
    res.json({ "error": "Please provide an input!" });
  } else {
      res.status(200).json({
        "received": Number(req.query.input),
        "result": Number(req.query.input * 2)
      });
    }
});

app.get('/greeter', (req, res) => {
  if (req.query.name === undefined && req.query.title === undefined) {
    res.status(400).json({ "error": "Please provide a name and a title!" });
  } else if (req.query.name === undefined) {
    res.status(400).json({ "error": "Please provide a name!" });
  } else if (req.query.title === undefined) {
    res.status(400).json({"error": "Please provide a title!" });
  } else {
    res.status(200).json({
      "welcome_message": `Oh, hi there ${req.query.name}, my dear ${req.query.title}!`
    });
  }
});

app.get('/appenda/:appendable', (req, res) => {
  if(req.params.appendable === undefined) {
    res.status(404);
  } else {
      res.status(200).json({
        "appended": req.params.appendable + "a"
      })
    }
});

app.post('/dountil/:operation', (req, res) => {
  let number = req.body.until;
  if (number === undefined) {
    res.json({ "error": "Please provide a number!" });
  } else {
      if (req.params.operation === 'sum') {
        let sum = 0;
        for (let i = 0; i <= number; i++) {
          sum += i;
        }
        res.status(200).json({
          "result": sum
        });
      } else if (req.params.operation === 'factor') {
          let factorial = 1;
          for (let i = 1; i <= number; i++) {
            factorial *= i;
          }
          res.status(200).json({
            "result": factorial
          });
        }
    }
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});