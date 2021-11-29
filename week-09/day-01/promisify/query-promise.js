'use strict';

const mysql = require('mysql');

async function mysqlQuery(query) {
  return new Promise((resolve, reject) => {
    conn.query(query, (err, rows) => {
      if (err) {
        reject(err);
        return;
      } else {
        return resolve(rows);
      }
    })
  })
}

let results = await mysqlQuery('SELECT * FROM users');
