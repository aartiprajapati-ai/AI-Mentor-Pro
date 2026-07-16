import express from "express";
import { getResources } from "../controllers/resourceController.js";

const router = express.Router();

router.get("/:topic", getResources);

export default router;