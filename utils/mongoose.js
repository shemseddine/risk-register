var mongoose = require("mongoose");

require("../db/register");

module.exports = () => {
  var db = mongoose.connect(
    `mongodb://localhost:27017/registers`,
    { useNewUrlParser: true, useCreateIndex: true }
  );

  return db;
};
