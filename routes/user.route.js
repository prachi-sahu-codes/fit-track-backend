const express = require("express");
const userRouter = express.Router();
const {
  changePassword,
  updateProfilePicture,
  updateContactDetails,
} = require("../controllers/user.controller");


userRouter.post("/changePassword", async (req, res) => {
  try {
    const { email, password, newPassword } = req.body;
    const user = await changePassword(email, password, newPassword);
    if (user) {
      res.status(200).json({ message: "Password Updated Successfully!", user });
    } else {
      res.status(401).json({ message: "User not found!" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to change user password" });
  }
});

userRouter.post("/updateProfilePicture", async (req, res) => {
  try {
    const { email, profilePicture } = req.body;
    const user = await updateProfilePicture(email, profilePicture);
    if (user) {
      res
        .status(201)
        .json({ message: "Profile picture updated successfully!", user });
    } else {
      res.status(401).json({ message: "User not found!" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to update user profile picture" });
  }
});

userRouter.post("/updateContact/:email", async (req, res) => {
  try {
    const { email } = req.params;
    const user = await updateContactDetails(email, req.body);
    if (user) {
      res
        .status(201)
        .json({ message: "Contact details updated successfully!", user });
    } else {
      res.status(401).json({ message: "User not found!" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to update contact details" });
  }
});

module.exports = userRouter;
