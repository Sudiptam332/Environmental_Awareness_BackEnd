const EcoAction = require("../models/EcoAction");
const User = require("../models/User");

exports.logEcoAction = async (req, res) => {
  const { actionType, impact } = req.body;
  try {
    const ecoAction = new EcoAction({
      user: req.user.id,
      actionType,
      impact,
    });

    await ecoAction.save();

    const user = await User.findById(req.user.id);
    user.ecoActions.push(ecoAction);
    await user.save();

    res.json(ecoAction);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

exports.getUserEcoActions = async (req, res) => {
  try {
    const ecoActions = await EcoAction.find({ user: req.user.id });
    res.json(ecoActions);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};
