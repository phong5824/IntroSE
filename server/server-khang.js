// require("dotenv").config();

// const express = require("express");
// const path = require("path");
// const cookieParser = require("cookie-parser");
// const cors = require("cors");
// const mongoose = require("mongoose");
// const bodyParser = require("body-parser");
// const passport = require("passport");
// const logger = require("morgan");
// const session = require("express-session");

// const SQLiteStore = require("connect-sqlite3")(session);

// // const accountRouter = require("./routes/accountRouter");
// const authRouter = require("./routes/auth");
// // const db = require("./db/index");
// const app = express();
// app.use(logger("dev"));
// app.use(express.json());
// app.use(cors());
// app.use(express.urlencoded({ extended: false }));
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, "public")));
// app.use(
//   session({
//     secret: "keyboard cat",
//     resave: false, // don't save session if unmodified
//     saveUninitialized: false, // don't create session until something stored
//     store: new SQLiteStore({ db: "sessions.db", dir: "./var/db" }),
//   })
// );

// async function main() {
//   await mongoose
//     .connect(
//       "mongodb+srv://admin:123@cluster0.kppyxho.mongodb.net/NMCNPM?retryWrites=true&w=majority"
//     )
//     .then(() => {
//       console.log("connected to MongoDB");
//       app.listen(8000, () => {
//         console.log(`Node API app is running on port 8000`);
//       });
//     })
//     .catch((err) => console.log(err));
// }

// main();

// // app.use("/", accountRouter);
// app.use("/", authRouter);

// // app.post("/send", (req, res) => {
// //   const { name, message } = req.body;
// //   console.log(name, message);
// //   // axios.post("http://localhost:8000/send", { name, message }).then((result) => {
// //   //   console.log(result);
// //   //   res.json(result.data);
// //   // });
// // });
