var connection = require("./connection");

function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

function objToSql(ob) {
  // column1=value, column2=value2,...
  var arr = [];

  for (var key in ob) {
    arr.push(key + "=" + ob[key]);
  }

  return arr.toString();
}
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