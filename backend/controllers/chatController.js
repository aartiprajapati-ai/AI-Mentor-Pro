import dotenv from "dotenv";
dotenv.config();

import { GoogleGenAI } from "@google/genai";

export const askAI = async (req, res) => {
  try {
    const { question } = req.body;

    if (!question) {
      return res.status(400).json({
        message: "Question is required",
      });
    }

    console.log("Question:", question);
    console.log("API Key:", process.env.GEMINI_API_KEY);

    const ai = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
    });

    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: question,
    });

    console.log("Gemini Response:", response);

    res.json({
      answer: response.text,
    });

  } catch (error) {
    console.log("========== GEMINI ERROR ==========");
    console.log(error);

    if (error.response) {
      console.log(error.response.data);
    }

    console.log("==================================");

    res.status(500).json({
      message: error.message || "Failed to get AI response",
    });
  }
};