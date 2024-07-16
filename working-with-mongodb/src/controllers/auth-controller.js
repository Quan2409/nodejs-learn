const userModel = require("../models/user-model");
const hashString = require("../utils/hashString");

const authController = {
  showFormRegister: (req, res) => {
    res.render("auth-views/register", { layout: "auth-views/auth-layout" });
  },

  showFormLogin: (req, res) => {
    res.render("auth-views/login", { layout: "auth-views/auth-layout" });
  },

  signUp: async (req, res) => {
    let user = {
      username: req.body.name,
      password: hashString(req.body.password),
      role: "admin",
    };
    await userModel.create(user);
    res.redirect("/");
  },

  signIn: async (req, res) => {
    //
  },
};

module.exports = authController;
