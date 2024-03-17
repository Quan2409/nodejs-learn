const express = require("express");
const router = express.Router();
const productController = require("../controllers/api/v1/product.controller");

//URL: localhost:4000/api
router.get("/", productController.handleGetRequest);

//URL: localhost:4000/api/id
router.get("/:id", productController.handleGetAProduct);

//URL: localhost:4000/api/delete/id
router.delete("/delete/:id", productController.handleDeleteProduct);

//URL: localhost:4000/api/add
router.post("/add", productController.handlePostRequest);

router.put("/edit/:id", productController.handleEditRequest);

module.exports = router;
