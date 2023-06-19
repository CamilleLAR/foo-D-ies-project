require("dotenv").config();
const mysql = require("mysql");

const DB_HOST = process.env.DB_HOST;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const DB_NAME = process.env.DB_NAME;

const con = mysql.createConnection({
  host: DB_HOST || "127.0.0.1",
  user: DB_USER || "root",
  password: DB_PASS,
  database: DB_NAME || "mealprepapp",
  multipleStatements: true
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");

  let sql =
    "DROP TABLE if exists users; DROP TABLE if exists calendar; DROP TABLE if exists settings; CREATE TABLE users(id INT NOT NULL AUTO_INCREMENT, firstname VARCHAR(60), lastname VARCHAR(60), email VARCHAR(60), password VARCHAR(60), PRIMARY KEY(id), UNIQUE(email)); CREATE TABLE calendar(id INT NOT NULL AUTO_INCREMENT, user_id INT DEFAULT 0 NOT NULL, date DATE, meal_type VARCHAR(60), recipe_id INT NOT NULL, recipe_title VARCHAR(255), recipe_image VARCHAR(255), favourite BOOLEAN DEFAULT 0, PRIMARY KEY(id)); CREATE TABLE settings(id INT NOT NULL AUTO_INCREMENT, user_id INT DEFAULT 0 NOT NULL, diet VARCHAR(60), allergies VARCHAR(255), bad_food VARCHAR(255), PRIMARY KEY(id))";
  con.query(sql, function(err, result) {
    if (err) throw err;
    console.log(
      "Tables creation `users`, `calendar` and settings was successful!"
    );

    console.log("Closing...");
  });

  con.end();
});
