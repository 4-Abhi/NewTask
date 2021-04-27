const db = require("../db/db");

exports.Create = async (req, res) => {
  let sql = "INSERT INTO  user  SET ?";
  let query = db.query(sql, req.body, (err, data) => {
    if (err) throw err;
    res.send(data);
  });
};
