const Food = require("../models/food.model");

const getAllFoodData = async () => {
  try {
    const allFoodData = await Food.find({ userId: "651ec1c5aebafce43c05612c" });
    console.log(allFoodData);
    return allFoodData;
  } catch (error) {
    console.log("Error in getting all food data");
  }
};

const getUserFoodData = async (userId) => {
  try {
    const allFoodData = await Food.find({ userId });
    console.log(allFoodData);
    return allFoodData;
  } catch (error) {
    console.log("Error in getting user's food data");
  }
};

const createFoodData = async (foodData) => {
  try {
    if (foodData) {
      const newFoodData = new Food(foodData);
      const savedFoodData = await newFoodData.save();
      console.log("New foodData saved", savedFoodData);
      return savedFoodData;
    } else {
      console.log("Food data not found", error);
    }
  } catch (error) {
    console.log("Error in creating new food input", error);
  }
};

const updateFoodData = async (foodDataId, foodData) => {
  try {
    const foundFood = await Food.findByIdAndUpdate(foodDataId, foodData, {
      new: true,
      runValidators: true,
    });
    if (foundFood) {
      return foundFood;
    } else {
      console.log("Food Data not found");
    }
  } catch (error) {
    console.log("Error in updating food data", error);
  }
};

const deleteFoodData = async (foodDataId) => {
  try {
    const deletedFoodData = await Food.findByIdAndDelete(foodDataId);
    if (deletedFoodData) {
      console.log("Food data deleted", deletedFoodData);
      return deletedFoodData;
    } else {
      console.log("Food data not found.");
    }
  } catch (error) {
    console.log("Error in deleting Food data,", error);
  }
};

module.exports = {
  getAllFoodData,
  getUserFoodData,
  createFoodData,
  updateFoodData,
  deleteFoodData,
};
