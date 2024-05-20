const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const {
  logEcoAction,
  getUserEcoActions,
} = require("../controllers/ecoActionController");

// @route    POST api/ecoactions
// @desc     Log an eco-friendly action
// @access   Private
router.post("/", auth, logEcoAction);

// @route    GET api/ecoactions
// @desc     Get logged eco-friendly actions of the user
// @access   Private
router.get("/", auth, getUserEcoActions);

module.exports = router;
