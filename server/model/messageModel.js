const mongoose = require("mongoose");

const schema = mongoose.Schema({
  message: String,
});

const Model = mongoose.model("testCollection2", schema, "Message");

module.exports = Model;
