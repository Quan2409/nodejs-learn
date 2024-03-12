const express = require("express");
const router = express.Router();
const categoryController = require("../controllers/category.controller");

//read-category
router.get("/", categoryController.handleGetRequest);

//create-category
router.get("/add", categoryController.showAddForm);
router.post("/add", categoryController.handlePostRequest);

//update-category
router.get("/edit/:id", categoryController.showEditForm);
router.post("/edit/:id", categoryController.handleUpdateRequest);

//delete-category
router.get("/delete/:id", categoryController.handleDeleteRequest);

module.exports = router;
