const Challenge = require("../models/Challenge");
const User = require("../models/User");

exports.createChallenge = async (req, res) => {
  const { title, description, reward } = req.body;
  try {
    const challenge = new Challenge({
      title,
      description,
      reward,
    });

    await challenge.save();
    res.json(challenge);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

exports.getAllChallenges = async (req, res) => {
  try {
    const challenges = await Challenge.find();
    res.json(challenges);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

exports.participateInChallenge = async (req, res) => {
  try {
    const challenge = await Challenge.findById(req.params.id);
    if (!challenge) {
      return res.status(404).json({ msg: "Challenge not found" });
    }

    challenge.participants.push(req.user.id);
    await challenge.save();

    const user = await User.findById(req.user.id);
    user.challenges.push(challenge);
    await user.save();

    res.json(challenge);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};
