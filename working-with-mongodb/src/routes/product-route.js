const express = require("express");
const router = express.Router();
const productController = require("../controllers/product-controller");

router.get("/", productController.readAllProduct);
router.get("/add", productController.showFormCreate);
router.post("/add", productController.createProduct);
router.get("/edit/:id", productController.showFormEdit);
router.post("/edit/:id", productController.updateProduct);
router.get("/delete/:id", productController.deleteSingleProduct);

module.exports = router;
