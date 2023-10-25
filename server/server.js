const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const testModel = require("./model/testModel");

const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

async function main() {
  await mongoose
    .connect(
      "mongodb+srv://admin:21120478@cluster0.fwapf6c.mongodb.net/testDtb?retryWrites=true&w=majority"
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
  const { username, password } = req.body;
  testModel.findOne({ name: username }).then((result) => {
    if (!result) {
      console.log("Username does not exist!");
      res.json({ success: false, error: "Username does not exist!" });
    } else {
      if (result.password === password) {
        console.log("Success");
        res.json({ success: true, name: result.name });
      } else {
        console.log("Fail");
        res.json({ success: false, error: "Incorrect password!" });
      }
    }
  });
});

app.post("/register", (req, res) => {
  const { username, password } = req.body;
  testModel.findOne({ name: username }).then((result) => {
    if (result) {
      // res.json("Username already exists!");
      res
        .status(409)
        .json({ success: false, error: "Username already exists!" });
    } else {
      console.log("Success");
      const newTest = new testModel({
        name: username,
        password: password,
      });
      newTest.save().then(() => {
        res.json({ success: true, name: newTest.name });
      });
    }
  });
});
