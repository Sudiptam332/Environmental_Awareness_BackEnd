const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  ecoActions: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "EcoAction",
    },
  ],
  challenges: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Challenge",
    },
  ],
  initiatives: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Initiative",
    },
  ],
});

module.exports = mongoose.model("User", UserSchema);
