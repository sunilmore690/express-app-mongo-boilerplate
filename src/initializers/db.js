const mongoose = require("mongoose");
const { MONGO_URI } = require("config");
module.exports = app => {
  console.log("MONGO_URI", MONGO_URI);
  mongoose.connect(MONGO_URI || "mongodb://localhost/test", {
    useNewUrlParser: true
  });
};
