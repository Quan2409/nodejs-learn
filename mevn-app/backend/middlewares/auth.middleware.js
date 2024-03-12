const checkLoginSession = (req, res, next) => {
  if (req.session.username) {
    next();
  } else {
    res.redirect("/auth/signin");
  }
};

//check signle role
const checkSignleRole = (req, res, next) => {
  if (req.session.username && req.session.role == "admin") {
    next();
  } else {
    res.redirect("auth/signin");
  }
};

//check multiple roles
const checkMultipleRole = (allowedRoles) => (req, res, next) => {
  if (req.session.username && allowedRoles.includes(req.session.role)) {
    next();
  } else {
    res.redirect("auth/signin");
  }
};

module.exports = {
  checkLoginSession,
  checkSignleRole,
  checkMultipleRole,
};
