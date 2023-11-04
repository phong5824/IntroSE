require("dotenv").config();

const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const logger = require("morgan");
const session = require("express-session");

const SQLiteStore = require("connect-sqlite3")(session);

// const accountRouter = require("./routes/accountRouter");
const authRouter = require("./routes/auth");
const db = require("./db/index");
const app = express();
app.use(logger("dev"));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(
  session({
    secret: "keyboard cat",
    resave: false, // don't save session if unmodified
    saveUninitialized: false, // don't create session until something stored
    store: new SQLiteStore({ db: "sessions.db", dir: "./var/db" }),
  })
);

db.on("error", (stream) => {
  console.log("mongodb error");
});

app.listen(8000, () => {
  console.log(`Node API app is running on port 8000`);
});
// app.use("/", accountRouter);
app.use("/", authRouter);
