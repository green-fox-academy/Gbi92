'use strict';

const express = require('express');
const app = express();

app.use(express.static('assets'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.listen(3000, function(){
    console.log('Server is running at PORT 3000');
});