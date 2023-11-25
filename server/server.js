require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const accountRouter = require("./routes/account");
const userRouter = require("./routes/user");
const recipesRouter = require("./routes/recipes");
const db = require("./db/index");
// const { auth, provider } = require("./server/firebase");

const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", accountRouter);
app.use("/", recipesRouter);
app.use("/users", userRouter);
db.on("error", (stream) => {
  console.log("mongodb error");
});

app.listen(8000, () => {
  console.log(`Node API app is running on port 8000`);
});
// app.use('/',accountModel)
