const express = require("express");
const router = express.Router();
const productController = require("../controllers/product-controller");
const { checkAdminRole } = require("../middlewares/auth-middleware");

router.get("/add", checkAdminRole, productController.showFormCreate);
router.post("/add", productController.createProduct);
router.get("/edit/:id", checkAdminRole, productController.showFormEdit);
router.post("/edit/:id", productController.updateProduct);
router.get(
  "/delete/:id",
  checkAdminRole,
  productController.deleteSingleProduct
);
router.post("/search", productController.searchProduct);
router.get("/sort/asc", productController.sortAsc);
router.get("/sort/desc", productController.sortDesc);

module.exports = router;
