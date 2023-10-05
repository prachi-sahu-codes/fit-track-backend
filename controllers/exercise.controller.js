const Exercise = require("../models/exercise.model");

const getAllExercise = async () => {
  try {
    const allExercise = await Exercise.find({
      userId: "651ec1c5aebafce43c05612c",
    });
    console.log(allExercise);
    return allExercise;
  } catch (error) {
    console.log("Error in getting all exercise data");
  }
};

const getUserExercise = async (userId) => {
  try {
    const allExercise = await Exercise.find({ userId });
    console.log(allExercise);
    return allExercise;
  } catch (error) {
    console.log("Error in getting user's exercise data");
  }
};

const createExercise = async (exerciseData) => {
  try {
    if (exerciseData) {
      const newExercise = new Exercise(exerciseData);
      const savedExercise = await newExercise.save();
      console.log("New exercise saved", savedExercise);
      return savedExercise;
    } else {
      console.log("Exercise Data not found", error);
    }
  } catch (error) {
    console.log("Error in creating new exercise", error);
  }
};

const deleteExercise = async (exerciseId) => {
  try {
    const deletedExercise = await Exercise.findByIdAndDelete(exerciseId);
    if (deletedExercise) {
      console.log("Exercise deleted", deletedExercise);
      return deletedExercise;
    } else {
      console.log("Exercise not found.");
    }
  } catch (error) {
    console.log("Error in deleting exercise data,", error);
  }
};

module.exports = {
  getAllExercise,
  getUserExercise,
  createExercise,
  deleteExercise,
};
