'use strict';

const mysql = require('mysql');
const express = require('express');

const app = express();
const PORT = 3000;

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'alma123',
  database: 'bookstore'
});

app.listen(PORT, () => {
  console.log(`The server is running on PORT ${PORT}`);
});

conn.connect((error) => {
  if (error) {
    console.log(error);
    return;
  }
  console.log('Succesfully connected to database');
  conn.end();
});