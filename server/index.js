import express from "express";
import dotenv from "dotenv";
dotenv.config();

import axios from "axios";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) =>
  res
    .status(200)
    .send("Server is running redirect to/chat for Promt testing.."),
);

app.post("/chat", async (req, res) => {
  const { Prompt } = req.body;
  try {
    const response = await axios.post("http://localhost:11434/api/generate", {
      model: "llama3",
      prompt: Prompt,
      stream: false,
    });
    res.json({ reply: response.data.response });
  } catch (err) {
    console.error("Chat error:", err?.response?.data || err.message);
    res.status(500).json({ error: "AI error" });
  }
});

app.listen(PORT, () => console.log("Server live at 5000"));
