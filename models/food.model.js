const mongoose = require("mongoose");
const TrackFitUser = require("./trackFitUser.model");

const foodSchema = new mongoose.Schema(
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
    calories: {
      type: Number,
      required: true,
    },
    protein: Number,
    carbohydrates: Number,
    fat: Number,
    category: {
      type: String,
      enum: ["fruit", "vegetable", "dish"],
      default: "dish",
    },
  },
  {
    timestamps: true,
  }
);

const Food = mongoose.model("Food", foodSchema);

module.exports = Food;
