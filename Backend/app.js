const express = require("express");
const app = express();
app.use(express.json());
require("dotenv").config();
const mysql = require("mysql");

let users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];

const connection = mysql.createConnection({
  host: "localhost",
  user: process.env.USERNAME,
  password: process.env.PASSWORD,
  database: "recipes_project",
});
connection.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

app.get("/", function (req, res) {
  res.send(process.env.NAMEOFSQL || "NodeJS runs");
});
app.get("/recipies", function (req, res) {
  connection.query("SELECT * FROM recipes", function (error, results, fields) {
    if (error) throw error;
    console.log("The result is: ", results);
  });
  const userData = users.find((u) => u.id === 1);
  res.send(userData);
});
app.get("/recipies/:id", function (req, res) {
  const id = parseInt(req.params.id);
  const user = users.find((u) => u.id === id);
  if (!user) {
    return res.status(404).send("user not found");
  }
  res.json(user);
});
app.get("/ingredients", function (req, res) {
  connection.query(
    "SELECT * FROM ingredients",
    function (error, results, fields) {
      if (error) throw error;
      console.log("The result is: ", results);
    }
  );
});
app.get("/ingredients/:id", function (req, res) {
  const id = parseInt(req.params.id);
  const user = users.find((u) => u.id === id);
  if (!user) {
    return res.status(404).send("user not found");
  }
  res.json(user);
});
app.get("/recipes_days", function (req, res) {
  connection.query(
    "SELECT * FROM recipes_days",
    function (error, results, fields) {
      if (error) throw error;
      console.log("The result is: ", results);
    }
  );
});
app.get("/recipes_days/:id", function (req, res) {
  const id = parseInt(req.params.id);
  const user = users.find((u) => u.id === id);
  if (!user) {
    return res.status(404).send("user not found");
  }
  res.json(user);
});

app.listen(3000, function () {
  console.log("Server listening on port 3000");
});
