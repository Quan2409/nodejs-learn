const express = require("express");
const router = express.Router();
const categoryRouter = require("./category-route");
const productRouter = require("./product-route");
const authRouter = require("./category-route");

router.use("/", productRouter);
router.use("/category", categoryRouter);
router.use("/auth", categoryRouter);

module.exports = router;
