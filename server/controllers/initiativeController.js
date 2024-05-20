const Initiative = require("../models/Initiative");
const User = require("../models/User");

exports.createInitiative = async (req, res) => {
  const { name, description, location, date } = req.body;
  try {
    const initiative = new Initiative({
      name,
      description,
      location,
      date,
      user: req.user.id,
    });

    await initiative.save();

    const user = await User.findById(req.user.id);
    user.initiatives.push(initiative);
    await user.save();

    res.json(initiative);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

exports.getAllInitiatives = async (req, res) => {
  try {
    const initiatives = await Initiative.find().populate("user", [
      "name",
      "email",
    ]);
    res.json(initiatives);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

exports.joinInitiative = async (req, res) => {
  try {
    const initiative = await Initiative.findById(req.params.id);
    if (!initiative) {
      return res.status(404).json({ msg: "Initiative not found" });
    }

    initiative.participants.push(req.user.id);
    await initiative.save();

    const user = await User.findById(req.user.id);
    user.initiatives.push(initiative);
    await user.save();

    res.json(initiative);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};
