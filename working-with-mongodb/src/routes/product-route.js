const express = require("express");
const router = express.Router();
const productController = require("../controllers/product-controller");
const authMiddleware = require("../middlewares/auth-middleware");

router.get("/add", authMiddleware, productController.showFormCreate);
router.post("/add", productController.createProduct);
router.get("/edit/:id", productController.showFormEdit);
router.post("/edit/:id", productController.updateProduct);
router.get("/delete/:id", productController.deleteSingleProduct);
router.post("/search", productController.searchProduct);
router.get("/sort/asc", productController.sortAsc);
router.get("/sort/desc", productController.sortDesc);
module.exports = router;
