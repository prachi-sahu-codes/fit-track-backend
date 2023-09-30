const express = require("express");
const authRouter = express.Router();
const generateToken = require("../utils/utils");
const {
  signUp,
  login,
  getAllUsers,
  getUserById,
} = require("../controllers/user.controller");

authRouter.post("/signup", async (req, res) => {
  try {
    const user = await signUp(req.body);
    if (user) {
      const token = generateToken(user._id);
      console.log("Registration successful", token, user);
      res.status(201).json({ message: "Registration successful", token, user });
    } else {
      res
        .status(401)
        .json({ error: "Username already taken or insufficient data." });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to create user account" });
  }
});

authRouter.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await login(email, password);
    if (user) {
      const token = generateToken(user._id);
      console.log("Login successful", token, user);
      res.status(201).json({ message: "Login successful", token, user });
    } else {
      console.log("here");
      res.status(401).json({ error: "Invalid credentials." });
    }
  } catch (error) {
    res.status(500).json({ error: "Error in logging in user." });
  }
});

authRouter.get("/", async (req, res) => {
  try {
    const users = await getAllUsers();
    res.status(201).json({ message: "All users data", users });
  } catch (error) {
    res.status(500).json({ error: "Failed to get users data" });
  }
});

authRouter.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await getUserById(id);
    if (user) {
      res.status(201).json({ message: "User found", user });
    } else {
      res.status(401).json({ message: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to get user detail by Id" });
  }
});

module.exports = authRouter;
