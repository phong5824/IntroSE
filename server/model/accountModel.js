const mongoose = require("mongoose");

const schema = mongoose.Schema({
  //   user_id: {
  //     type: String,
  //     unique: true,
  //   },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  username: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    // unique: true,
    required: true,
  },
});

const Model = mongoose.model("account", schema, "accounts");

module.exports = Model;
