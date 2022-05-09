import express from "express";
import { createItem, getItemById, getItems } from "../services/item.service.js";

const router = express.Router();

router.route("/").get(getItems);
router.route("/:id").get(getItemById);
router.route("/").post(createItem);

export default router;
