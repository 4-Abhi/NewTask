const mysql = require("mysql");
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Admin123",
  database: "test_nodejs",
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("Connnected");
});

module.exports = db;
