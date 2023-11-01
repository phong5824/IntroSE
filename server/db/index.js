const mongoose = require("mongoose");

mongoose
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

const db = mongoose.connection;

module.exports = db;
