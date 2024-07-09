const express = require("express");
const router = express.Router();
const categoryRouter = require("./category-route");
const productRouter = require("./product-route");

router.use("/", productRouter);
router.use("/category", categoryRouter);

module.exports = router;
