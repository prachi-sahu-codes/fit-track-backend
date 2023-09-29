// const mongoose = require("mongoose");
require('dotenv').config();

const express = require("express");
const app = express();
const { initializeDatabase } = require("./db/db.connect");

initializeDatabase();

app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("FitTrack Backend!!");
});

app.listen(3000, () => console.log("Server Started"));
