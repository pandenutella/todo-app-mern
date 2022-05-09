import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import { initializeConnection } from "./config/db.js";
import groupController from "./controllers/group.controller.js";
import itemController from "./controllers/item.controller.js";

initializeConnection();
dotenv.config();

const app = express();

const corsOptions = {
  origin: process.env.FRONTEND_URL,
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(express.json());

app.use("/api/groups", groupController);
app.use("/api/items", itemController);

const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(`App is running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
