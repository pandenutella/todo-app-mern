import dotenv from "dotenv";
import express from "express";
import { initializeConnection } from "./config/db.js";
import groupController from "./controllers/group.controller.js";

initializeConnection();
dotenv.config();

const app = express();

app.use("/api/groups", groupController);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`App is running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
