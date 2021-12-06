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

app.get('/api/game', (req, res) => {
  const SQL_SELECT_QUERY = `
  SELECT * FROM questions AS q
  INNER JOIN answers AS a ON q.id = a.question_id
  WHERE q.id = ?`;

  conn.query('SELECT id FROM questions;', (err, rows) => {
    if (err) {
      res.status(500).json({message: err});
      return;
    }

    let randomIndex = Math.floor(Math.random() * rows.length);

    conn.query(SQL_SELECT_QUERY, [rows[randomIndex].id], (err, rows) => {
      if (err) {
        res.status(500).json({message: err});
        return;
      }

      let answersArr = [];
      for (let i = 0; i < rows.length; i++) {
        let answer = {};

        answer['question_id'] = rows[i].question_id;
        answer['id'] = rows[i].id;
        answer['answer_' + (i + 1)] = rows[i].answer;
        answer['is_correct'] = rows[i].is_correct;

        answersArr.push(answer);
      }

      res.status(200).json({
        id: rows[0].question_id,
        question: rows[0].question,
        answers: answersArr
      });
    });
  });
});

app.get('/api/questions', (req, res) => {
  conn.query('SELECT * FROM questions', (err, rows) => {
    if (err) {
      res.status(500).json({message: err});
      return;
    }

    res.status(200).json(rows);
  });
});