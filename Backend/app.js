const express = require('express');
const app = express();
app.use(express.json());
require('dotenv').config();
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'recipes_project',
});
connection.connect(function (err) {
  if (err) throw err;
  console.log('Connected!');
});

app.get('/', function (req, res) {
  res.send(process.env.NAMEOFSQL || 'NodeJS runs');
});
app.get('/recipes', function (req, res) {
  connection.query('SELECT * FROM recipes', function (error, results, fields) {
    if (error) throw error;
    console.log('The result is: ', results);
    res.send(results);
  });
});
app.get('/recipes/:id', function (req, res) {
  const id = req.params.id;
  connection.query(
    `SELECT * FROM recipes WHERE recipe_id=${id}`,
    function (error, results, fields) {
      if (error) throw error;
      console.log('The result is: ', results);
      res.send(results);
    }
  );
});
app.get('/ingredients', function (req, res) {
  connection.query(
    'SELECT * FROM ingredients',
    function (error, results, fields) {
      if (error) throw error;
      console.log('The result is: ', results);
      res.send(results);
    }
  );
});
app.get('/ingredients/:id', function (req, res) {
  const id = req.params.id;
  connection.query(
    `SELECT * FROM ingredients WHERE ingredient_id=${id}`,
    function (error, results, fields) {
      if (error) throw error;
      console.log('The result is: ', results);
      res.send(results);
    }
  );
});
app.get('/recipes_days', function (req, res) {
  connection.query(
    'SELECT * FROM recipes_days',
    function (error, results, fields) {
      if (error) throw error;
      console.log('The result is: ', results);
      res.send(results);
    }
  );
});
app.get('/recipes_days/:id', function (req, res) {
  const id = req.params.id;
  connection.query(
    `SELECT * FROM recipes_days WHERE day_id=${id}`,
    function (error, results, fields) {
      if (error) throw error;
      console.log('The result is: ', results);
      res.send(results);
    }
  );
});

app.listen(3000, function () {
  console.log('Server listening on port 3000');
});
