import express from "express";
import { getGroupById, getGroups } from "../services/group.service";

const router = express.router();

router.route("/").get(getGroups);
router.route("/:id").get(getGroupById);

export default router;
