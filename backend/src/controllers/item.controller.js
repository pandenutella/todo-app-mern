import express from "express";
import { getItemById, getItems } from "../services/item.service.js";

const router = express.Router();

router.route("/").get(getItems);
router.route("/:id").get(getItemById);

export default router;
