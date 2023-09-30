const express = require("express");
const goalRouter = express.Router();
const {
  getAllFitnessGoal,
  createFitnessGoal,
  deleteFitnessGoal,
} = require("../controllers/fitnessGoal.controller");

goalRouter.get("/:userId", async (req, res) => {
  try {
    const { userId } = req.params;
    const data = await getAllFitnessGoal(userId);
    if (data) {
      console.log(data);
      res.status(201).json({ message: "All fitness goals data:", data });
    }
  } catch (error) {
    res.status(500).json({ error: "Error in getting fitness goals data" });
  }
});

goalRouter.post("/", async (req, res) => {
  try {
    const fitnessGoalData = await createFitnessGoal(req.body);
    if (fitnessGoalData) {
      res
        .status(201)
        .json({
          message: "New fitness goal data added",
          data: fitnessGoalData,
        });
    } else {
      res.status(401).json({ error: "Error in adding fitness goal data!" });
    }
  } catch (error) {
    res.status(500).json({ error: "fitness goal data not added!" });
  }
});

goalRouter.delete("/:fitnessGoalId", async (req, res) => {
  try {
    const { fitnessGoalId } = req.params;
    const deletedFitnessGoal = await deleteFitnessGoal(fitnessGoalId);
    if (deletedFitnessGoal) {
      res.status(204).json({ message: "Fitness goal data deleted by Id" });
    } else {
      res.status(401).json({ error: "Error in deleting fitness goal data!" });
    }
  } catch (error) {
    res.status(500).json({ error: "Fitness goal data not added!" });
  }
});

module.exports = goalRouter;
