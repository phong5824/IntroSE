const accountModel = require("../model/accountModel");
// const jwt = require("jsonwebtoken");
// const bcrypt = require("bcrypt");

const loginControl = async (req, res) => {
  const { email, password } = req.body;

  await accountModel
    .findOne({ email: email })
    .then((result) => {
      if (!result) {
        console.log("Username does not exist!");
        res.json({ success: false, error: "Username does not exist!" });
      } else {
        if (result.password && result.password === password) {
          console.log("Success login");
          res.json({ success: true, message: "Login Success" });
        } else {
          console.log("Fail login");
          res.json({ success: false, error: "Incorrect password!" });
        }
      }
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .json({ success: false, message: "Internal server error" });
    });
};

const registerControl = async (req, res) => {
  const { email, password } = req.body;

  const latestAccount = await accountModel
    .findOne({}, { user_id: 1 })
    .sort({ user_id: -1 })
    .exec();

  // console.log("latestAccount.user_id:", latestAccount.user_id);
  // console.log("latestAccount.email:", latestAccount.email);

  await accountModel
    .findOne({ email: email })
    .then(async (result) => {
      if (result) {
        res
          .status(409)
          .json({ success: false, error: "Username already exists!" });
      } else {
        console.log("Success register");

        // *copy from poe*
        // Find the highest user_id in the collection
        const latestAccount = await accountModel
          .findOne({}, { user_id: 1 })
          .sort({ user_id: -1 })
          .exec();

        const nextUserId = latestAccount ? latestAccount.user_id + 1 : 1;

        const account = new accountModel({
          user_id: nextUserId,
          email: email,
          password: password,
        });

        account.save().then(() => {
          res.json({ success: true, message: "Register Success" });
        });
      }
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .json({ success: false, message: "Internal server error" });
    });
};

module.exports = { loginControl, registerControl };
