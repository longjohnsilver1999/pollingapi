//importing models
const questions = require("../models/questionModel");
const options = require("../models/optionsModel");

module.exports.addOption = async function (req, res) {
  try {
    const question = await questions.findById(req.params.id);
    for (let option of req.body.options) {
      // creating options
      const currOption = await options.create({
        text: option,
      });
      //  dynamic link
      currOption.link_to_vote =
        "http://" +
        req.headers.host +
        "/options/" +
        currOption.id +
        "/add_vote";
      currOption.save();

      question.options.push(currOption.id);
      question.save();
    }

    return res.status(200).json({
      message: "option added succesfully",
    }); //error handling
  } catch (err) {
    return res.status(500).json({
      message: " error",
      error: err.message,
    });
  }
};

module.exports.deleteOption = async function (req, res) {
  try {
    const option = await options.findById(req.params.id);
    // check whether contains any vote or not
    if (option.votes > 0) {
      return res.status(401).json({
        message: "You cannot delete that vote",
      });
    }
    //update question
    await questions.updateOne(
      { options: { $in: req.params.id } },
      { $pull: { options: { $eq: req.params.id } } }
    );
    // delete option
    await option.remove();
    // returning the response
    return res.status(200).json({
      message: "option deleted succesfully",
    });
  } catch (err) {
    return res.status(500).json({
      message: " error",
      error: err.message,
    });
  }
};

// incrementing the count of votes
module.exports.incrementVotes = async function (req, res) {
  try {
    const option = await options.findById(req.params.id);

    option.votes += 1;
    await option.save();

    return res.status(200).json({
      message: "vote added",
      votes: option.votes,
    });
  } catch (err) {
    res.status(465).json({
      message: "could not increment the count",
      err: "internal server error",
    });
  }
};
