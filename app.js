const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const user = require("./routes/userRoutes");
const db = require("./db/db");

const app = express();

dotenv.config({ path: "./.config.env" });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/adduser", user);

// app.get("/user", (req, res) => {
//   let sql = "SELECT * FROM  user";
//   let query = db.query(sql, (err, data) => {
//     if (err) throw err;
//     res.send(data);
//   });
// });

const Port = process.env.PORT || 4000;

app.listen(Port, () => {
  console.log(`Processs start on ${Port}`);
});
