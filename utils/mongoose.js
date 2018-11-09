var mongoose = require("mongoose");

require("../db/register");

const connectionString = process.env.MONGODB || `mongodb://localhost:27017/registers`;

module.exports = () => {
  var db = mongoose.connect(
    connectionString,
    { useNewUrlParser: true, useCreateIndex: true }
  );

  return db;
};
