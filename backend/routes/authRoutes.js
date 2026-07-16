import express from "express";
import { register, login } from "../controllers/authController.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);

router.post("/logout", (req, res) => {
  res.clearCookie("token");

  res.json({
    success: true,
    message: "Logout Successful",
  });
});

export default router;