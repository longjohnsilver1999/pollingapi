const express = require("express");
const router = express.Router();
const questionController = require("../controllers/questions");
const optionsController = require("../controllers/options");
// route for creating a quetion
router.post("/questions/create", questionController.createQuestion);

// route for creating options
router.post("/questions/:id/options/create", optionsController.addOption);

// adding a route for deleting an question
router.get("/questions/:id/delete", questionController.deleteQuestion);

// adding a route for deleting  an options
router.get("/options/:id/delete", optionsController.deleteOption);

// adding a route for increaing the vote for an option
router.get("/options/:id/add_vote", optionsController.incrementVotes);

// adding a route for getting the details of a particular question
router.get("/questions/:id", questionController.getQuestionDetails);

// exporting router
module.exports = router;
