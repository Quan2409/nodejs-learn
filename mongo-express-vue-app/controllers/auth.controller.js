const authController = {
  //sign-up
  showSignUpForm: (req, res) => {
    res.render("auth/signup", { layout: "auth_layout" });
  },
};

module.exports = authController;
