const express = require("express");
const router = express.Router();

//decalre controller
const productController = require("../controllers/product.controller");

// show all product
router.get("/", productController.handleGetRequest);

// delete a product
router.get("/delete/:id", productController.handleDeleteRequest);

module.exports = router;
