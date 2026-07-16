import dotenv from "dotenv";
import express from "express";

import cors from "cors";
import cookieParser from "cookie-parser";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import roadmapRoutes from "./routes/roadmapRoutes.js";
import chatRoutes from "./routes/chatRoutes.js";

dotenv.config();

const app = express();

connectDB();

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://localhost:5174",
      "https://ai-mentor-265aj4aq8-aarti-project.vercel.app",
    ],
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/roadmap", roadmapRoutes);
app.use("/api/chat", chatRoutes);


app.get("/", (req, res) => {
  res.send("Backend Working ✅");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on ${PORT}`);
  console.log("Gemini Key:", process.env.GEMINI_API_KEY);
});