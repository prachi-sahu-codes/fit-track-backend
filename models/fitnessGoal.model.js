const mongoose = require("mongoose");
const TrackFitUser = require("./trackFitUser.model");

const fitnessGoalSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "TrackFitUser",
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    description: String,
    targetDate:  {
        type: String,
        required: true,
      },
    targetCalories: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      required: true,
      enum: ["In Progress", "Acheived", "Abandoned"],
      default: "In Progress",
    },
  },
  {
    timestamps: true,
  }
);

const FitnessGoal = mongoose.model("FitnessGoal", fitnessGoalSchema);

module.exports = FitnessGoal;
