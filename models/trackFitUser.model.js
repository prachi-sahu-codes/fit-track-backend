const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    profilePicture: String,
    username: {
      type: String,
      required: true,
      unique: true,
    },
    phoneNumber: Number,
    address: String,
  },
  {
    timestamps: true,
  }
);

const TrackFitUser = mongoose.model("TrackFitUser", userSchema);
module.exports = TrackFitUser;
