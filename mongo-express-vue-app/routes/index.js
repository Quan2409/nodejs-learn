var express = require("express");
var router = express.Router();

//home-page
router.get("/", function (req, res, next) {
  res.send("<h1>NodeJS Course</h1>");
});

module.exports = router;