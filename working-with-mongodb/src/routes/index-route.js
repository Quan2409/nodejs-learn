const express = require("express");
const router = express.Router();
const productController = require("../controllers/product-controller");

router.get("/", productController.readAllProduct);

module.exports = router;
