const mongoose = require("mongoose"),
  Schema = mongoose.Schema;

const RegisterSChema = new Schema({
  description: String,
  raisedOn: String,
  likelihood: Number,
  impact: Number,
  severity: Number,
  owner: String,
  mitigation: String,
  contingent: String,
  progress: String,
  status: String
});

RegisterSChema.set("toJSON", { getters: true, virtuals: true });

module.exports = mongoose.model("Register", RegisterSChema);
