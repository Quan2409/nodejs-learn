const express = require("express");
const router = express.Router();

//decalre controller
const categoryController = require("../controllers/category.controller");

// show all category
router.get("/", categoryController.handleGetRequest);

//delete a categoru
router.get("/delete/:id", categoryController.handleDeleteRequest);

module.exports = router;
