var orm = require("../config/orm");
var burger = {
selectall: function(cb) {
    orm.all("burger", function(res) {
      cb(res);
    });
  },
 
  insertone: function(cols, vals, cb) {
    orm.create("burger", cols, vals, function(res) {
      cb(res);
    });
  },
  updateone: function(objColVals, condition, cb) {
    orm.update("burger", objColVals, condition, function(res) {
      cb(res);
    });
  }
};


module.exports = burger;