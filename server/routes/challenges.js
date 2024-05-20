const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const {
  createChallenge,
  getAllChallenges,
  participateInChallenge,
} = require("../controllers/challengeController");

// @route    POST api/challenges
// @desc     Create a new challenge
// @access   Private
router.post("/", auth, createChallenge);

// @route    GET api/challenges
// @desc     Get all challenges
// @access   Public
router.get("/", getAllChallenges);

// @route    PUT api/challenges/participate/:id
// @desc     Participate in a challenge
// @access   Private
router.put("/participate/:id", auth, participateInChallenge);

module.exports = router;
