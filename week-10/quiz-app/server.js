'use strict';

const express = require('express');
const mysql = require('mysql');

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(express.static('public'));

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'alma123',
  database: 'quiz'
})

app.listen(PORT, () => console.log(`The server is runnig on PORT ${PORT}`));

conn.connect((error) => {
  if (error) {
    console.log(error);
    return;
  }
  console.log('Succesfully connected to database');
});

app.get('/game', (req, res) => {
  res.sendFile(__dirname + '/public/html/game.html');
});

app.get('/questions', (req, res) => {
  res.sendFile(__dirname + '/public/html/manage-questions.html');
});