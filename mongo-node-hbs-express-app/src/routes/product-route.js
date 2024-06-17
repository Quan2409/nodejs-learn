const express = require("express");
const router = express.Router();
const productController = require("../controllers/product-controller");

router.get("/", productController.readAllProduct);
router.get("/add", productController.showFormCreate);
router.get("/delete/:id", productController.deleteSingleProduct);

module.exports = router;
