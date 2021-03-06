const mysql = require("mysql");
const config = require("config");

const connection = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "mani1234",
  database: "btg",
  port: "3306"
});
connection.connect(err => {
  if (err) throw err;
  console.log("Connected!");
});

module.exports = connection;
