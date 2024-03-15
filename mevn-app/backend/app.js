var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var session = require("express-session");
var mongoose = require("mongoose");

//decalre router (1 models => 1 routes)
const indexRouter = require("./routes/index");
var categoryRouter = require("./routes/category");
var productRouter = require("./routes/product");
var authRouter = require("./routes/auth");

var app = express();

//connect to mongoDB
const database = "mongodb://0.0.0.0:27017/data_test";
mongoose
  .connect(database)
  .then(() => {
    console.log("Connect Database Success");
  })
  .catch((err) => {
    console.log(err);
  });

//set session timeout
const timeout = 1000 * 60 * 60 * 24; //24 hours (in millinseconds)
//config session middeware
app.use(
  session({
    secret: "alien_is_existed_or_not_it_is_still_a_secret",
    saveUninitialized: false,
    cookie: { maxAge: timeout },
    resave: false,
  })
);

//make session value can be accessible in view (hbs)
app.use((req, res, next) => {
  res.locals.username = req.session.username;
  res.locals.role = req.session.role;
  next();
});

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

//declare URL of routes
app.use("/", indexRouter);
app.use("/category", categoryRouter);
app.use("/product", productRouter);
app.use("/auth", authRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
