const express = require("express");
const dotenv = require("dotenv");
const app = express();
const bodyParser = require("body-parser");
const port = process.env.PORT || 8000;

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(bodyParser.json());
app.listen(port, (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("server is running on", port);
});
