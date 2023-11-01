// import axios from "axios";
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
// const testModel = require("./model/testModel");
const accountModel = require("./model/accountModel");

const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

async function main() {
  await mongoose
    .connect(
      "mongodb+srv://admin:21120478@cluster0.fwapf6c.mongodb.net/?retryWrites=true&w=majority"
    )
    .then(() => {
      console.log("connected to MongoDB");
      app.listen(8000, () => {
        console.log(`Node API app is running on port 8000`);
      });
    })
    .catch((err) => console.log(err));
}

main();

app.post("/login", (req, res) => {
  const { email, username, password } = req.body;
  accountModel.findOne({ username: username }).then((result) => {
    if (!result) {
      console.log("Username does not exist!");
      res.json({ success: false, error: "Username does not exist!" });
    } else {
      if (result.password === password) {
        console.log("Success");
        res.json({ success: true, username: result.username });
      } else {
        console.log("Fail");
        res.json({ success: false, error: "Incorrect password!" });
      }
    }
  });
});

app.post("/register", (req, res) => {
  const { email, username, password } = req.body;
  accountModel.findOne({ username: username }).then((result) => {
    if (result) {
      res
        .status(409)
        .json({ success: false, error: "Username already exists!" });
    } else {
      console.log("Success");
      const account = new accountModel({
        email: email,
        username: username,
        password: password,
      });
      account.save().then(() => {
        res.json({ success: true, username: account.username });
      });
    }
  });
});

app.post("/send", (req, res) => {
  const { name, message } = req.body;
  console.log(name, message);
  // axios.post("http://localhost:8000/send", { name, message }).then((result) => {
  //   console.log(result);
  //   res.json(result.data);
  // });
});
