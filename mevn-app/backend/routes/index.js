var express = require("express");
const router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/admin", (req, res) => {
  res.render("admin");
});

router.get("/user", (req, res) => {
  res.render("index");
});

module.exports = router;
