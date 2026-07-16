import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import {
  createRoadmap,
  updateTopicStatus,
  getRoadmap,
} from "../controllers/roadmapController.js";

const router = express.Router();

router.get("/", authMiddleware, getRoadmap);

// Create Roadmap
router.post("/", authMiddleware, createRoadmap);

// Mark Topic Complete
router.put("/complete", authMiddleware, updateTopicStatus);

export default router;