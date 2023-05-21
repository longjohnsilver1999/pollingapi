const express = require("express");
const dotenv = require("dotenv");
const app = express();
const bodyParser = require("body-parser");
const port = process.env.PORT || 8000;
const mongoose = require("mongoose");

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(bodyParser.json());
app.use(require("./routes/route"));

app.listen(port, (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("server is running on", port);
});
dotenv.config();
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
  })
  .then(() => console.log("Connected to sumits cluster"))

  .catch((err) => {
    console.error(err);
  });
