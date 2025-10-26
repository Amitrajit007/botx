import express from "express";
import dotenv from "dotenv";
dotenv.config();

import axios from "axios";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

let conversationHistory = [];

app.get("/", (req, res) =>
  res
    .status(200)
    .send("Server is running redirect to/chat for Promt testing.."),
);

app.post("/chat", async (req, res) => {
  const { Prompt } = req.body;

  conversationHistory.push({ sender: "user", content: Prompt });

  try {
    const response = await axios.post("http://localhost:11434/api/generate", {
      model: "llama3",
      prompt: conversationHistory
        .map((m) => `${m.sender}: ${m.content}`)
        .join("\n"),
      stream: false,
      // options: { num_predict: Math.min(60 + Prompt.length * 2, 180) },
    });
    const Reply = response.data.response;
    conversationHistory.push({ sender: "AI", content: Reply });
    res.json({ reply: Reply });
  } catch (err) {
    console.error("Chat error:", err?.response?.data || err.message);
    res
      .status(500)
      .json({ error: "AI API error go to console for more info :-<" });
  }
});

app.listen(PORT, () => console.log("Server live at 5000"));
