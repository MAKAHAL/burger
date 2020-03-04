var orm = require("../config/orm.js");


// //function Burger(name) {
//   this.name = name;
//   this.devoured = false;
// }

var burger = {
  all: function(cb) {
    orm.all("burgers", function(res) {
      cb(res);
    });
  },
  create: function(name, cb) {
  //   Burger.create = function (burger) {
  //     return new Promise((resolve, reject) => {
  //         orm.insertOne("BURGERS", {
  //             burger_name: burger.name,
  //             devoured: burger.devoured
  //         }).then(results => {
  //             // Get db generated ID
  //             burger.id = results.insertId;
  //             resolve(burger.id);
  //         }).catch(() => {
  //             reject("Could not add burger");
  //         });
  //     });
  // };
    orm.create("burgers", [
      "burger_name", "devoured"
    ], [
      name, false
    ], cb);
  },
  update: function(id, cb) {
    var condition = "id=" + id;
    orm.update("burgers", {
      devoured: true
    }, condition, cb);
  }
};

module.exports = burger;