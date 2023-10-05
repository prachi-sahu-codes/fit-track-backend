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
      enum: [
        "running",
        "cycling",
        "swimming",
        "walking",
        "yoga",
        "dancing",
        "hiking",
        "jump_rope",
        "aerobics",
        "weight_lifting",
        "tennis",
        "basketball",
        "soccer",
        "volleyball",
        "table_tennis",
        "skiing",
        "snowboarding",
        "skating",
        "climbing",
        "pilates",
        "crossfit",
        "martial_arts",
        "gymnastics",
        "rowing",
        "canoeing",
        "kayaking",
        "sailing",
        "surfing",
        "paddleboarding",
        "aerial_sports",
        "archery",
        "fencing",
        "golf",
        "baseball",
        "softball",
        "cricket",
        "badminton",
        "eSports",
        "other",
      ],
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
    yoga: 4,
    dancing: 6,
    hiking: 7,
    jump_rope: 12,
    aerobics: 7,
    weight_lifting: 3,
    tennis: 7,
    basketball: 8,
    soccer: 8,
    volleyball: 4,
    table_tennis: 5,
    skiing: 7,
    snowboarding: 6,
    skating: 6,
    climbing: 8,
    pilates: 4,
    crossfit: 9,
    martial_arts: 6,
    gymnastics: 5,
    rowing: 6,
    canoeing: 5,
    kayaking: 5,
    sailing: 4,
    surfing: 7,
    paddleboarding: 5,
    aerial_sports: 6,
    archery: 4,
    fencing: 5,
    golf: 4,
    baseball: 5,
    softball: 5,
    cricket: 6,
    badminton: 5,
    eSports: 2,
    other: 6,
  };

  const calories = this.duration * caloriesPerMinute[this.exerciseType];
  return calories;
});

const Exercise = mongoose.model("Exercise", exerciseSchema);

module.exports = Exercise;
