import express from "express";
import {
  createGroup,
  getGroupById,
  getGroupByIdWithItems,
  getGroups,
} from "../services/group.service.js";

const router = express.Router();

router.route("/").get(getGroups);
router.route("/:id").get(getGroupById);
router.route("/:id/items").get(getGroupByIdWithItems);
router.route("/").post(createGroup);

export default router;
