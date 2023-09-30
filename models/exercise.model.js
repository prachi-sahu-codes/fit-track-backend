const mongoose = require("mongoose");
const TrackFitUser = require("./trackFitUser.model");

const exerciseSchema = new mongoose.Schema(
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
    duration: {
      type: Number,
      required: true,
    },
    exerciseType: {
      type: String,
      enum: ["running", "cycling", "swimming", "walking", "other"],
      required: true,
      default: "other",
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
  {
    timestamps: true,
  }
);

exerciseSchema.virtual("caloriesBurned").get(function () {
  const caloriesPerMinute = {
    running: 10,
    cycling: 8,
    swimming: 7,
    walking: 5,
    other: 6,
  };

  const calories = this.duration * caloriesPerMinute[this.exerciseType];
  return calories;
});

const Exercise = mongoose.model("Exercise", exerciseSchema);

module.exports = Exercise;
