const express = require('express');
const mysql = require('mysql');

const app = express();

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '0627',
  database: 'list_app'
});

connection.connect((err) => {
  if (err) {
    console.log('error connecting: ' + err.stack);
    return;
  }
  console.log('success');
});

app.use(express.static('public'));

app.get('/', (req, res) =>{
  res.render('hello.ejs');
});

app.get('/top', (req, res) =>{
  res.render('top.ejs');
});

app.listen(3000);
