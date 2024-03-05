const express = require("express");
const router = express.Router();

//decalre controller
const productController = require("../controllers/product.controller");

// show all product
router.get("/", productController.handleGetRequest);

// delete a product
router.get("/delete/:id", productController.handleDeleteRequest);

//add new form
router.get("/add", productController.showAddForm);
router.post("/add", productController.handlePostRequest);

//edit product
router.get("/edit/:id", productController.showEditForm);
router.post("/edit/:id", productController.handleUpdateRequest);

module.exports = router;
