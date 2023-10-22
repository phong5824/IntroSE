const mongoose = require("mongoose");

const schema = mongoose.Schema({
  name: String,
  password: String,
});

const Model = mongoose.model("testCollection2", schema, "testCollection2");

module.exports = Model;
