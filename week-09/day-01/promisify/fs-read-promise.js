'use strict';

const fs = require('fs');

async function readFile(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, (err, data) => {
      if (err) {
        reject(err);
        return;
      } else {
        return resolve(data);
      }
    })
  })
}

let data = await readFile('hello.txt');
