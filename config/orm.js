var connection = require("./connection");


var orm = {

  all: function(tableName, cb) {
    var queryString = "SELECT * FROM ??";
    connection.query(queryString, [tableName], function(err, result) {
      if (err) {
        console.log(err);
      } else {
        cb(result);
      }
    })
  },
  create: function(tableName, column, value, cb) {
    var queryString = "INSERT INTO ?? (??) VALUES (?)";
    connection.query(queryString, [tableName, column, value], function(err, result) {
      if (err) {
        console.log(err);
      } else {
        cb(result);
      }
    })
  },
  update: function(tableName, colVal, boolean, colName, condition, cb) {
    var queryString = "UPDATE ?? SET ??=? WHERE ??=?";
    connection.query(queryString, [tableName, colVal, boolean, colName, condition], function(err, result) {
      if (err) {
        console.log(err);
      } else {
        cb(result);
      }
    })
  }
}

module.exports = orm;