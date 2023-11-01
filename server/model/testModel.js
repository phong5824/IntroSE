const mongoose = require("mongoose");

const schema = mongoose.Schema({
  name: String,
  password: String,
});

const Model = mongoose.model("def", schema, "ghj");

module.exports = Model;
