const express = require("express");
const path = require("path");
const createError = require("http-errors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const mongodb = require("./src/config/database-config");
const indexRouter = require("./src/routes/index-route");

//app
const app = express();
const port = 3005;

// config dotenv
dotenv.config();

// connect database
mongodb();

// template engine setup
app.set("views", path.join(__dirname, "src/views"));
app.set("view engine", "hbs");

//app.use()
app.use(morgan("dev"));
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json({ limit: "10mb" }));
app.use(express.static(path.join(__dirname, "src", "views")));

// routes
app.use(indexRouter);

// handle 404
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};
  res.status(err.status || 500);
  res.render("error");
});

app.listen(port, () => {
  console.log(`server is running on: http://localhost:${port}/`);
});

module.exports = app;
