const express = require("express");
const router = express.Router();
const categoryController = require("../controllers/category-controller");
const { checkAdminRole } = require("../middlewares/auth-middleware");

router.get("/", checkAdminRole, categoryController.readAllCategory);
router.get("/add", checkAdminRole, categoryController.showFormCreate);
router.post("/add", categoryController.createCategory);
router.get("/edit/:id", checkAdminRole, categoryController.showFormEdit);
router.post("/edit/:id", checkAdminRole, categoryController.updateCategory);
router.get(
  "/delete/:id",
  checkAdminRole,
  categoryController.deleteSingleCategory
);

module.exports = router;
