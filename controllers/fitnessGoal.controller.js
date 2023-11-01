const FitnessGoal = require("../models/fitnessGoal.model");

const getAllFitnessGoal = async (userId) => {
  try {
    const allFitnessGoal = await FitnessGoal.find({ userId });
    console.log(allFitnessGoal);
    return allFitnessGoal;
  } catch (error) {
    console.log("Error in getting all fitness Goals");
  }
};

const createFitnessGoal = async (fitnessGoalData) => {
  try {
    if (fitnessGoalData) {
      const newFitnessGoal = new FitnessGoal(fitnessGoalData);
      const savedFitnessGoal = await newFitnessGoal.save();
      console.log("New FitnessGoal saved", savedFitnessGoal);
      return savedFitnessGoal;
    } else {
      console.log("Fitness goal data not found", error);
    }
  } catch (error) {
    console.log("Error in creating new fitness goal", error);
  }
};

const updateFitnessGoal = async (fitnessGoalId, fitnessGoalData) => {
  try {
    const foundGoal = await FitnessGoal.findByIdAndUpdate(
      fitnessGoalId,
      fitnessGoalData,
      {
        new: true,
        runValidators: true,
      }
    );
    if (foundGoal) {
      return foundGoal;
    } else {
      console.log("Fitness goal data not found");
    }
  } catch (error) {
    console.log("Error in updating fitness goal data", error);
  }
};

const deleteFitnessGoal = async (fitnessGoalId) => {
  try {
    const deletedFitnessGoal = await FitnessGoal.findByIdAndDelete(
      fitnessGoalId
    );
    if (deletedFitnessGoal) {
      console.log("Fitness goal deleted", deletedFitnessGoal);
      return deletedFitnessGoal;
    } else {
      console.log("Fitness goal data not found.");
    }
  } catch (error) {
    console.log("Error in deleting fitness goal data,", error);
  }
};

module.exports = {
  getAllFitnessGoal,
  createFitnessGoal,
  updateFitnessGoal,
  deleteFitnessGoal,
};
