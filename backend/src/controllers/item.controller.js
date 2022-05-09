import express from "express";
import {
  createItem,
  getItemById,
  getItems,
  updateItemProperties,
} from "../services/item.service.js";

const router = express.Router();

router.route("/").get(getItems);
router.route("/:id").get(getItemById);
router.route("/").post(createItem);
router.route("/:id").patch(updateItemProperties);

export default router;
