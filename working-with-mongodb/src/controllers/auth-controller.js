const userModel = require("../models/user-model");

const authController = {
  showFormRegister: (req, res) => {
    res.render("auth-views/register", { layout: "auth-views/auth-layout" });
  },

  showFormLogin: (req, res) => {
    res.render("auth-views/login", { layout: "auth-views/auth-layout" });
  },
};

module.exports = authController;
