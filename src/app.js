const express = require("express");
var bodyParser = require("body-parser");

let app = express();
app.use(bodyParser.json());
app.get("/", (req, res) => res.send("Welcome to Express"));

app.use("/", require("./routes/index.js"));
app.use("/users", require("./routes/user"));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development

  // render the error page
  res.status(err.status || 500);
  res.send(err.message);
});
//create a server object:
module.exports = app;
