'use strict';

const express = require('express');
const mysql = require('mysql');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static('public'));

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

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/html/index.html');
});

app.get('/posts', (req, res) => {
  const SQL_QUERY = `
    SELECT p.id, p.title, p.url, p.timestamp, p.score, u.user_name AS owner 
    FROM posts AS p
    INNER JOIN users AS u ON p.user_id = u.user_id;`;
  
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

    const SQL_SELECT_QUERY = `
      SELECT p.id, p.title, p.url, p.timestamp, p.score, u.user_name AS owner 
      FROM posts AS p
      INNER JOIN users AS u ON p.user_id = u.user_id
      WHERE id=?`;

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

    const SQL_SELECT_QUERY = `
      SELECT p.id, p.title, p.url, p.timestamp, p.score, u.user_name AS owner 
      FROM posts AS p
      INNER JOIN users AS u ON p.user_id = u.user_id 
      WHERE id=?`;

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
  const SQL_UPDATE_QUERY = `
  UPDATE posts SET score = score - 1 
    WHERE id=? 
    AND score > 0`;

  conn.query(SQL_UPDATE_QUERY, [req.params.id], (err, rows) => {
    if (err) {
      console.log(err);
      res.status(500).json('INTERNAL SERVER ERROR');
      return;
    }
  
    const SQL_SELECT_QUERY = `
      SELECT p.id, p.title, p.url, p.timestamp, p.score, u.user_name AS owner 
      FROM posts AS p
      INNER JOIN users AS u ON p.user_id = u.user_id
      WHERE id=?`;
  
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

app.delete('/posts/:id', (req, res) => {
  const SQL_SELECT_QUERY = `
    SELECT p.id, p.title, p.url, p.timestamp, p.score, u.user_name AS owner 
    FROM posts AS p
    INNER JOIN users AS u ON p.user_id = u.user_id
    WHERE id=?
      AND p.user_id=?`;

  const SQL_DELETE_QUERY = `
    DELETE FROM posts
    WHERE id=?
      AND user_id=?`;

  conn.query(SQL_SELECT_QUERY, [req.params.id, req.headers.user_id], (err, rows) => {
    if (err) {
      console.log(err);
      res.status(500).json('INTERNAL SERVER ERROR');
      return;
    }

    let deletedRow = rows[0];
    deletedRow.owner = null;

    conn.query(SQL_DELETE_QUERY, [req.params.id, req.headers.user_id], (err, rows) => {
      if (err) {
        console.log(err);
        res.status(500).json('INTERNAL SERVER ERROR');
        return;
      }
    });
    res.status(200).json(deletedRow);
  });
});

app.put('/posts/:id', (req, res) => {
  const SQL_UPDATE_QUERY = `
    UPDATE posts SET title = ?, timestamp = ?
      WHERE id=?
      AND user_id=?`;
  
  conn.query(SQL_UPDATE_QUERY, [req.body.title, Date.now(), req.params.id, req.headers.user_id], (err, rows) => {
    if (err) {
      console.log(err);
      res.status(500).json('INTERNAL SERVER ERROR');
      return;
    }

    const SQL_SELECT_QUERY = `
      SELECT p.id, p.title, p.url, p.timestamp, p.score, u.user_name AS owner 
      FROM posts AS p
      INNER JOIN users AS u ON p.user_id = u.user_id 
      WHERE id=?`;

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
