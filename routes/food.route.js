const express = require("express");
const foodRouter = express.Router();
const {
  getAllFoodData,
  getUserFoodData,
  createFoodData,
  deleteFoodData,
} = require("../controllers/food.controller");

foodRouter.get("/", async (req, res) => {
  try {
    const data = await getAllFoodData(userId);
    if (data) {
      console.log(data);
      res.status(201).json({ message: "All foods data:", data });
    }
  } catch (error) {
    res.status(500).json({ error: "Error in getting foods data" });
  }
});

foodRouter.get("/:userId", async (req, res) => {
  try {
    const { userId } = req.params;
    const data = await getUserFoodData(userId);
    if (data) {
      console.log(data);
      res.status(201).json({ message: "User's food data:", data });
    }
  } catch (error) {
    res.status(500).json({ error: "Error in getting foods data" });
  }
});

foodRouter.post("/", async (req, res) => {
  try {
    const foodData = await createFoodData(req.body);
    if (foodData) {
      res.status(201).json({ message: "New food data added", data: foodData });
    } else {
      res.status(401).json({ error: "Error in adding food data!" });
    }
  } catch (error) {
    res.status(500).json({ error: "Food data not added!" });
  }
});

foodRouter.delete("/:foodDataId", async (req, res) => {
  try {
    const { foodDataId } = req.params;
    const deletedFoodData = await deleteFoodData(foodDataId);
    if (deletedFoodData) {
      res.status(204).json({ message: "Food data deleted by Id" });
    } else {
      res.status(401).json({ error: "Error in deleting food data!" });
    }
  } catch (error) {
    res.status(500).json({ error: "Food data not added!" });
  }
});

module.exports = foodRouter;
