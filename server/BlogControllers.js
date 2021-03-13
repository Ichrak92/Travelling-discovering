var connection = require("../database-mysql/index.js");
const bodyParser = require("body-parser");
const mysql = require("mysql");
module.exports = {
  findAll: (req, res) => {
    var syntax = `SELECT * FROM blog`;
    connection.query(syntax, function(err, data) {
      if (err) console.log(err, "errror");
      res.send(JSON.stringify(data));
    });
  },

  create: (req, res) => {
    var syntax = `INSERT INTO blog(name, country, descip,imageUrl ) VALUES(?,?,?,?)`;
    console.log("**********************", req.body);
    var values = [
      req.body.name,
      req.body.country,
      req.body.descip,
      req.body.imageUrl,
    ];
    connection.query(syntax, values, function(err, data) {
      if (err) console.log(err);
      res.send(data);
      console.log(data);
    });
  },
  delete: (req, res) => {
    var syntax = `DELETE FROM blog WHERE id = ?`;
    connection.query(syntax, [req.params.id1], function(err, data) {
      if (err) throw err;
      res.send(data);
    });
  },
  update: (req, res) => {
    console.log("*********************", req.body);
    const syntax = `UPDATE blog SET descip="${req.body.descip}" WHERE id=${req.params.id}`;
    connection.query(syntax, (err, result) => {
      err ? console.log(err) : res.status(200).json(result);
      console.log(result);
    });
  },
};
