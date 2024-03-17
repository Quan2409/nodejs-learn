const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth.controller");

//sign-up
router.get("/signup", authController.showSignUpForm);
router.post("/signup", authController.handleSignUp);

//sign-in
router.get("/signin", authController.showSignInForm);
router.post("/signin", authController.handleSignIn);

//log-out
router.get("/logout", authController.handleLogOut);

module.exports = router;
