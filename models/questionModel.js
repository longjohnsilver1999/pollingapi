const mongoose = require("mongoose");

// importing Option Model
const options = require("./optionsModel");

// creating a questions schema
const questionsdb = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },

  options: [{ type: mongoose.Schema.Types.ObjectId, ref: "options" }],
});

// setting it as a Model
const questions = mongoose.model("questions", questionsdb);

// Exporting Questions Model
module.exports = questions;
