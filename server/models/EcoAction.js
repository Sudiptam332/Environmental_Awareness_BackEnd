const mongoose = require("mongoose");

const EcoActionSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  actionType: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  impact: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("EcoAction", EcoActionSchema);
