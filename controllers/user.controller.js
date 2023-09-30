const bcrypt = require("bcrypt");
const TrackFitUser = require("../models/trackFitUser.model");

const signUp = async (userData) => {
  try {
    const userExists = await TrackFitUser.findOne({
      username: userData.username,
    });
    if (userExists) {
      throw new Error("Username already taken!");
    }

    const newUser = new TrackFitUser(userData);
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(newUser.password, salt);
    newUser.password = hashPassword;

    const savedUser = await newUser.save();
    console.log(savedUser);
    return savedUser;
  } catch (error) {
    console.log("Error in signing up!");
  }
};

const login = async (email, password) => {
  try {
    const user = await TrackFitUser.findOne({ email });
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (passwordMatch) {
      console.log("Found User: ", user);
      return user;
    } else {
      console.log("Invalid credentials!");
      throw new Error("Invalid credentials!");
    }
  } catch (error) {
    console.log("Error in logging in!");
  }
};

const getAllUsers = async () => {
  try {
    const users = await TrackFitUser.find();
    console.log(users);
    return users;
  } catch (error) {
    console.log("Error in getting users data!");
  }
};

const getUserById = async (_id) => {
  try {
    const user = await TrackFitUser.findOne({ _id });
    if (user) {
      console.log(user);
      return user;
    } else {
      console.log("User not found!");
      throw new Error("User not found!");
    }
  } catch (error) {
    console.log("Error in getting user by Id!");
  }
};

const changePassword = async (email, password, newPassword) => {
  try {
    const user = await TrackFitUser.findOne({ email });
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (passwordMatch) {
      const salt = await bcrypt.genSalt(10);
      const hashPassword = await bcrypt.hash(newPassword, salt);
      user.password = hashPassword;
      const updateUser = await user.save();
      console.log(updateUser);
      return updateUser;
    } else {
      console.log("User not found!");
      throw new Error("User not found!");
    }
  } catch (error) {
    console.log("Error in updating password!");
  }
};

const updateProfilePicture = async (email, newProfilePicture) => {
  try {
    const user = await TrackFitUser.findOne({ email });
    if (user) {
      user.profilePicture = newProfilePicture;
      const updatedUser = await user.save();
      console.log(updatedUser);
      return updatedUser;
    } else {
      console.log("User not found!");
      throw new Error("User not found!");
    }
  } catch (error) {
    console.log("Error in updating profile picture!");
  }
};

const updateContactDetails = async (email, contactDetails) => {
  try {
    const user = await TrackFitUser.findOne({ email });
    if (user) {
      Object.assign(user, contactDetails);
      const updatedUser = await user.save();
      console.log(updatedUser);
      return updatedUser;
    } else {
      console.log("User not found!");
      throw new Error("User not found!");
    }
  } catch (error) {
    console.log("Error in updating contact details!");
  }
};

module.exports = {
  signUp,
  login,
  getAllUsers,
  getUserById,
  changePassword,
  updateProfilePicture,
  updateContactDetails,
};
