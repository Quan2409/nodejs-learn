const express = require("express");
const path = require("path");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const session = require("express-session");
const hbs = require("hbs");
const mongodb = require("./src/config/database-config");
const indexRouter = require("./src/routes/index-route");

// config express.js
const app = express();
app.use(express.json({ limit: "10mb" }));
app.use(express.static(path.join(__dirname, "public")));

// config session timeout
const timeout = 1000 * 60 * 60 * 24;
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: timeout },
  })
);

// config database
mongodb();

// register hbs helper
hbs.registerHelper("eq", function (a, b) {
  return a.toString() === b.toString();
});

// config template engine
app.set("views", path.join(__dirname, "src/views"));
app.set("view engine", "hbs");

//config morgan
app.use(morgan("dev"));

// config body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// config routes
app.use(indexRouter);

// error-handling
app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};
  res.status(err.status || 500);
  res.render("error");
});

// config server
let port = 3005;
app.listen(port, () => {
  console.log(`server is running on: http://localhost:${port}/`);
});

module.exports = app;
