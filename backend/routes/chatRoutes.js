import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import { askAI } from "../controllers/chatController.js";

const router = express.Router();

router.post("/", authMiddleware, askAI);

export default router;