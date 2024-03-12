const express = require("express");
const router = express.Router();
const productController = require("../controllers/product.controller");
const {
  checkSignleRole,
  checkMultipleRole,
} = require("../middlewares/auth.middleware");

//create-product
router.get(
  "/add",
  checkMultipleRole(["user", "admin"]),
  productController.showAddForm
);
router.post("/add", productController.handlePostRequest);

//read-product
router.get("/", checkSignleRole, productController.handleGetRequest);

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
