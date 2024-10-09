const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello Express");
});

router.get("/second-page", (req, res) => {
  res.send("This is second page");
});

module.exports = router;
