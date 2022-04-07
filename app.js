const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require('cors');
const session = require('express-session');

const usersRouter = require("./routes/usuarios");
const categoryRouter = require("./routes/categorias");
const recipesRouter = require("./routes/receitas");
const accessRouter = require("./routes/acesso");
// const cookieMiddleware = require("./middlewares/cokkieLogin");

const app = express();

app.use(session({
  secret: "BooksRecipesProject",
  resave: true,
  saveUninitialized: true
}))

app.use(cors())
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
// app.use(cookieMiddleware)

app.use("/usuarios", usersRouter);
app.use("/categorias", categoryRouter);
app.use("/receitas", recipesRouter);
app.use("/acesso", accessRouter);

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
  res.status(500).json({
    message: err.message,
    error: err,
  })
});

module.exports = app;
