const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const salt = 8;

const authController = {
  //sign-up
  showSignUpForm: (req, res) => {
    res.render("auth/signup", { layout: "/layouts/auth_layout" });
  },
  handleSignUp: async (req, res) => {
    const pass = req.body.password;
    const passHash = bcrypt.hashSync(pass, salt);
    try {
      const userAccount = {
        username: req.body.username,
        password: passHash,
        role: "admin", //req.body.role
        //custom-role: dropdown
      };
      await userModel.create(userAccount);
      res.redirect("/auth/signin");
    } catch (err) {
      console.log(err);
    }
  },

  // sign-in
  showSignInForm: (req, res) => {
    res.render("auth/signin", { layout: "/layouts/auth_layout" });
  },
  handleSignIn: async (req, res) => {
    try {
      const userLogin = req.body;
      const user = await userModel.findOne({
        username: userLogin.username,
      });
      if (user) {
        var hash = bcrypt.compareSync(userLogin.password, user.password);
        if (hash) {
          //initialize session after login success
          req.session.username = user.username;
          req.session.role = user.role;
          if (user.role == "admin") {
            res.locals.hideItem = false;
            res.redirect("/product");
          } else {
            res.redirect("/product");
          }
        } else {
          res.redirect("/auth/signin");
        }
      }
    } catch (err) {
      res.send(err);
    }
  },

  //logout
  handleLogOut: async (req, res) => {
    req.session.destroy();
    res.redirect("/auth/signin");
  },
};

module.exports = authController;
