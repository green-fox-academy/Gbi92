'use strict';

const express = require('express');
const mysql = require('mysql');

const app = express();
const PORT = 3000;

app.use(express.json());

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'alma123',
  database: 'reddit'
});

app.listen(PORT, () => console.log(`The server is runnig on PORT ${PORT}`));

conn.connect((error) => {
  if (error) {
    console.log(error);
    return;
  }
  console.log('Succesfully connected to database');
  //conn.end();
});

app.get('/hello', (req, res) => {
  res.send('hello world');
});

app.get('/posts', (req, res) => {
  const SQL_QUERY = `
    SELECT p.id, p.title, p.url, p.timestamp, p.score, u.user_name AS owner 
    FROM posts AS p
    JOIN users AS u ON p.user_id = u.user_id;`;
  
  conn.query(SQL_QUERY, (err, rows) => {
    if (err) {
      console.log(err);
      res.status(500).json('INTERNAL SERVER ERROR');
      return;
    }
    res.status(200).json({
      "posts": rows});
    });
});

app.post('/posts', (req, res) => {
  const SQL_INSERT_QUERY = 'INSERT INTO posts (title, url, timestamp, user_id) VALUES (?, ?, ?, ?);';

  let newId = null;

  conn.query(SQL_INSERT_QUERY, [req.body.title, req.body.url, Date.now(), req.headers.user_id], (err, rows) => {
    if (err) {
      console.log(err);
      res.status(500).json('INTERNAL SERVER ERROR');
      return;
    }

    newId = rows.insertId;
    const SQL_SELECT_QUERY = 'SELECT * FROM posts WHERE id=?';

    conn.query(SQL_SELECT_QUERY, [newId], (err, rows) => {
      if (err) {
        console.log(err);
        res.status(500).json('INTERNAL SERVER ERROR');
        return;
      }
      res.status(200).json(rows);
    });
  });
});

app.put('/posts/:id/upvote', (req, res) => {
  const SQL_UPDATE_QUERY = `UPDATE posts SET score = score + 1 WHERE id=?`;

  conn.query(SQL_UPDATE_QUERY, [req.params.id], (err, rows) => {
    if (err) {
      console.log(err);
      res.status(500).json('INTERNAL SERVER ERROR');
      return;
    }

    const SQL_SELECT_QUERY = 'SELECT * FROM posts WHERE id=?';

    conn.query(SQL_SELECT_QUERY, [req.params.id], (err, rows) => {
      if (err) {
        console.log(err);
        res.status(500).json('INTERNAL SERVER ERROR');
        return;
      }
      res.status(200).json(rows);
    });
  });
});

app.put('/posts/:id/downvote', (req, res) => {
  const SQL_UPDATE_QUERY = `UPDATE posts SET score = score - 1 WHERE id=?`;

  conn.query(SQL_UPDATE_QUERY, [req.params.id], (err, rows) => {
    if (err) {
      console.log(err);
      res.status(500).json('INTERNAL SERVER ERROR');
      return;
    }
  
    const SQL_SELECT_QUERY = 'SELECT * FROM posts WHERE id=?';
  
    conn.query(SQL_SELECT_QUERY, [req.params.id], (err, rows) => {
      if (err) {
        console.log(err);
        res.status(500).json('INTERNAL SERVER ERROR');
        return;
      }
      res.status(200).json(rows);
    });
  });
});

app.post('/users'); //input fields for update users table