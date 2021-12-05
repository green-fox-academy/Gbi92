'use strict';

const mysql = require('mysql');

function mysqlQuery(query) {
  return new Promise((resolve, reject) => {
    conn.query(query, (err, rows) => {
      if (err) {
        reject(err);
      } else {
        resolve(rows);
      }
    })
  })
}

let results = await mysqlQuery('SELECT * FROM users');
