const express = require("express");
const path = require("path");
const createError = require("http-errors");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const indexRouter = require("./src/routes/index-route");

//app
const app = express();
const port = 3005;

// template engine setup
app.set("views", path.join(__dirname, "src/views"));
app.set("view engine", "hbs");

//app.use()
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use(indexRouter);

// handle 404
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

app.listen(port, () => {
  console.log(`server is running on port: ${port}`);
});

module.exports = app;
