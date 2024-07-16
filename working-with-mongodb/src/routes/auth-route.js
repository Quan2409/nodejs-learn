const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth-controller");

router.get("/register", authController.showFormRegister);
router.post("/register", authController.signUp);
router.get("/login", authController.showFormLogin);
router.post("/login", authController.signIn);

module.exports = router;
