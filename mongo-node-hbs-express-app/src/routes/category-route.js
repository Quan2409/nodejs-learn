const express = require("express");
const router = express.Router();
const categoryController = require("../controllers/category-controller");

router.get("/", categoryController.readAllCategory);
router.post("/add", categoryController.createCategory);

module.exports = router;
