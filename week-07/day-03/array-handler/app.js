'use strict';

const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.json());

app.post('/arrays', (req, res) => {
  let whatToDo = req.body.what;
  let numbersArray = req.body.numbers;

  if (whatToDo === undefined && numbersArray === undefined) {
    res.status(400).json({ 
      "error": "Please provide what to do with the numbers!"
    });
  } else {
    if (whatToDo === 'sum') {
      let sumOfNums = numbersArray.reduce((prev, curr) => prev + curr);
      res.status(200).json({
        "result": sumOfNums
      });
    } else if (whatToDo === 'multiply') {
        let product = numbersArray.reduce((prev, curr) => prev * curr);
        res.status(200).json({
          "result": product
        });
    } else if (whatToDo === 'double') {
        let doubled = numbersArray.map(num => num * 2);
        res.status(200).json({
          "result": doubled
        });
    }
  }
});

app.listen(PORT, () => {
  console.log(`The server is running on ${PORT}`);
});
