
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const accountModel = require("./routes/account");

const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

async function main() {
  await mongoose
    .connect(
      "mongodb+srv://admin:123@cluster0.kppyxho.mongodb.net/NMCNPM?retryWrites=true&w=majority"
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

app.use('/',accountModel)


app.post("/send", (req, res) => {
  const { name, message } = req.body;
  console.log(name, message);
  // axios.post("http://localhost:8000/send", { name, message }).then((result) => {
  //   console.log(result);
  //   res.json(result.data);
  // });
});
