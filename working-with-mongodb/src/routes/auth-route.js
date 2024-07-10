const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth-controller");

router.get("/login", authController.showFormLogin);
router.get("/register", authController.showFormRegister);

module.exports = router;
