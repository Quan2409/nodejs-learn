const express = require("express");
const router = express.Router();
const productController = require("../controllers/product.controller");
const { checkAdminRole } = require("../middlewares/auth.middleware");
const { getUpload } = require("../middlewares/upload.middleware");

//read-product
router.get("/", productController.handleGetRequest);

//create-product
router.get("/add", checkAdminRole, productController.showAddForm);
router.post(
  "/add",
  getUpload("product", "image"),
  productController.handlePostRequest
);

//upadate-product
router.get("/edit/:id", productController.showEditForm);
router.post("/edit/:id", productController.handleUpdateRequest);

//delete-product
router.get("/delete/:id", productController.handleDeleteRequest);

//search product
router.post("/search", productController.handleSearchRequest);

//sort asc product
router.get("/sort/asc", productController.handleSortAscRequest);

//sort desc product
router.get("/sort/desc", productController.handleSortDescRequest);

module.exports = router;
