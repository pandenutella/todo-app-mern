import express from "express";
import { getGroupById, getGroups } from "../services/group.service.js";

const router = express.Router();

router.route("/").get(getGroups);
router.route("/:id").get(getGroupById);

export default router;
