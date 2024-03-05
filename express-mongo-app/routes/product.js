const express = require("express");
const router = express.Router();
const productController = require("../controllers/product.controller");

//read-product
router.get("/", productController.handleGetRequest);

// delete-product
router.get("/delete/:id", productController.handleDeleteRequest);

//create-product
router.get("/add", productController.showAddForm);
router.post("/add", productController.handlePostRequest);

//upadate-product
router.get("/edit/:id", productController.showEditForm);
router.post("/edit/:id", productController.handleUpdateRequest);

module.exports = router;
