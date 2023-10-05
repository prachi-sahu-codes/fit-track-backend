require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");
const helmet = require("helmet");
const { initializeDatabase } = require("./db/db.connect");

initializeDatabase();

const authRouter = require("./routes/auth.route");
const userRouter = require("./routes/user.route");
const exerciseRouter = require("./routes/exercise.route");
const goalRouter = require("./routes/fitnessGoal.route");
const foodRouter = require("./routes/food.route");

app.use(express.json());

app.use(cors());

app.use(helmet());

app.get("/", (req, res) => {
  res.send("FitTrack Backend!!");
});

const authVerify = require("./middlewares/authVerify.middleware");
const errorHandler = require("./middlewares/errorHandler.middleware");
const routeNotFound = require("./middlewares/routeNotFound.middleware");

app.use("/auth", authRouter);
app.use("/exercises", exerciseRouter);
app.use("/goals", goalRouter);
app.use("/foods", foodRouter);
app.use("/users", authVerify, userRouter);

app.use(errorHandler);
app.use(routeNotFound);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log("Server Started"));
