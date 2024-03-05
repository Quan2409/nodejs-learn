const express = require("express");
const router = express.Router();

//decalre controller
const categoryController = require("../controllers/category.controller");

// show all category
router.get("/", categoryController.handleGetRequest);

// add new category
router.get("/add", categoryController.showAddForm);
router.post("/add", categoryController.handlePostRequest);

//edit category
router.get("/edit/:id", categoryController.showEditForm);
router.post("/edit/:id", categoryController.handleUpdateRequest);

//delete a categoru
router.get("/delete/:id", categoryController.handleDeleteRequest);

module.exports = router;
