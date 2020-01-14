var express = require("express");

var router = express.Router();
var burger = require("../models/burger");
router.get("/", function(req, res) {
    burger.selectall(function(data) {
      var hbsObject = {
        cats: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });
  router.post("/burger", function(req, res) {
    burgers.insertone([
      "burgername"
    ], [
       req.body.burgername
    ], function(result) {
     
      res.json({ id: result.insertId });
    });
  });

  router.put("/burger/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  

  
    burger.updateone({ devoured: true
    
    }, condition, function(result) {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });
  module.exports = router;
