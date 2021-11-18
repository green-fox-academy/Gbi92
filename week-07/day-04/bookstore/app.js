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
  //conn.end();
});

app.get('/titles', (req, res) => {
  const SQL_QUERY = 'SELECT book_name FROM book_mast;';
  conn.query(SQL_QUERY, (error, rows) => {
    if(error) {
      console.log(error);
      res.status(500).json('INTERNAL SERVER ERROR');
      return;
    }
    res.status(200).json(rows);
  });
});

app.get('/books', (req, res) => {
  const SQL_QUERY = 
  `SELECT b.book_name AS title, a.aut_name AS author, c.cate_descrip AS category, p.pub_name AS publisher, b.book_price AS price
    FROM book_mast AS b 
    JOIN author AS a ON b.aut_id = a.aut_id
    JOIN category AS c ON b.cate_id = c.cate_id
    JOIN newpublisher AS p ON b.pub_id = p.pub_id;`;

  conn.query(SQL_QUERY, (error, rows) => {
    if(error) {
      console.log(error);
      res.status(500).json('INTERNAL SERVER ERROR');
      return;
    }
    
    res.status(200).json(rows);
  });
});