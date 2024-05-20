const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const {
  createInitiative,
  getAllInitiatives,
  joinInitiative,
} = require("../controllers/initiativeController");

// @route    POST api/initiatives
// @desc     Create a new initiative
// @access   Private
router.post("/", auth, createInitiative);

// @route    GET api/initiatives
// @desc     Get all initiatives
// @access   Public
router.get("/", getAllInitiatives);

// @route    PUT api/initiatives/join/:id
// @desc     Join an initiative
// @access   Private
router.put("/join/:id", auth, joinInitiative);

module.exports = router;
