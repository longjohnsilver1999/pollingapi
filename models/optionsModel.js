// importing mongoose library
const mongoose = require("mongoose");

// creating a schema
const optionsdb = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  votes: {
    type: Number,
    required: false,
    default: 0,
  },
  link_to_vote: {
    type: String,
    required: false,
    default: "",
  },
});

// setting it as a Model
const options = mongoose.model("options", optionsdb);

// exporting it
module.exports = options;
