const express = require("express");
const router = express.Router();
const categoryRouter = require("./category-route");
const productRouter = require("./product-route");
const authRouter = require("./auth-route");

router.use("/", productRouter);
router.use("/category", categoryRouter);
router.use("/auth", authRouter);

module.exports = router;
