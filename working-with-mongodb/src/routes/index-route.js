const express = require("express");
const router = express.Router();
const categoryRouter = require("./category-route");
const productRouter = require("./product-route");

router.get("/", (req, res) => {
  res.render("index");
});

router.use("/product", productRouter);
router.use("/category", categoryRouter);

module.exports = router;
