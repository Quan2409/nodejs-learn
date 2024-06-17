const express = require("express");
const router = express.Router();

// GET: /
router.get("/", (req, res, next) => {
  res.render("index", { title: "Hello World" });
});

module.exports = router;
