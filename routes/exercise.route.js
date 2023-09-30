const express = require("express");
const exerciseRouter = express.Router();
const {
  getAllExercise,
  createExercise,
  deleteExercise,
} = require("../controllers/exercise.controller");

exerciseRouter.get("/:userId", async (req, res) => {
  try {
    const { userId } = req.params;
    const data = await getAllExercise(userId);
    if (data) {
      console.log(data);
      res.status(201).json({ message: "All exercise data:", data });
    }
  } catch (error) {
    res.status(500).json({ error: "Error in getting exercise data" });
  }
});

exerciseRouter.post("/", async (req, res) => {
  try {
    const exerciseData = await createExercise(req.body);
    if (exerciseData) {
      res
        .status(201)
        .json({ message: "New Exercise added", data: exerciseData });
    } else {
      res.status(401).json({ error: "Error in adding exercise data!" });
    }
  } catch (error) {
    res.status(500).json({ error: "Exercise data not added!" });
  }
});

exerciseRouter.delete("/:exerciseId", async (req, res) => {
  try {
    const { exerciseId } = req.params;
    const deletedExercise = await deleteExercise(exerciseId);
    if (deletedExercise) {
      res.status(204).json({ message: "Exercise deleted by Id" });
    } else {
      res.status(401).json({ error: "Error in deleting exercise data!" });
    }
  } catch (error) {
    res.status(500).json({ error: "Exercise data not added!" });
  }
});

module.exports = exerciseRouter;
