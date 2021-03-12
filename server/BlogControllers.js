var connection = require("../database-mysql/index.js");
const bodyParser = require("body-parser");
const mysql = require("mysql");
module.exports = {
  findAll: (req, res) => {
    console.log("send");
    var syntax = `SELECT * FROM blog`;
    connection.query(syntax, function(err, data) {
      if (err) throw err;
      res.send(data);
    });
  },

  create: (req, res) => {
    var syntax = `INSERT INTO blog(name, email, description,imageUrl ) VALUES(?,?,?,?)`;
    console.log(req.body);
    var values = [
      req.body.name,
      req.body.email,
      req.body.description,
      req.body.imageUrl,
    ];
    connection.query(syntax, values, function(err, data) {
      if (err) console.log(err);
      res.send(data);
    });
  },
  delete: (req, res) => {
    var syntax = `DELETE FROM blog WHERE id = ?`;
    connection.query(syntax, [req.params.id], function(err, data) {
      if (err) throw err;
      res.send(data);
    });
  },
  update: (req, res) => {
    var syntax = `UPDATE blog SET name=?, email=?, country=?  WHERE id=?`;
    var values = req.body;
    connection.query(
      syntax,
      [
        values.name,
        values.email,
        values.country,
        values.description,
        values.imageUrl,
        req.params.id,
      ],
      (err, result) => {
        err ? console.log(err) : res.send(result);
      }
    );
  },
};
