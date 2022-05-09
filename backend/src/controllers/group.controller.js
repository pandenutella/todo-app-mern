import express from "express";
import {
  getGroupById,
  getGroupByIdWithItems,
  getGroups,
} from "../services/group.service.js";

const router = express.Router();

router.route("/").get(getGroups);
router.route("/:id").get(getGroupById);
router.route("/:id/items").get(getGroupByIdWithItems);

export default router;
