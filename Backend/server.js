import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(cors());

const API_KEY = "1200f975-4387-498a-8ab4-4df215da64a9";       // UUID from dashboard
const API_SECRET = "353834b65a569942eebd40e011db603928905f74e51470c1e84de9142d0d7340"; // click 👁 icon to copy

app.get("/get-token", async (req, res) => {
  try {
    const response = await fetch("https://api.videosdk.live/v2/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Basic " +
          Buffer.from(`${API_KEY}:${API_SECRET}`).toString("base64"),
      },
    });

    // 🔍 DEBUG: check status
    if (!response.ok) {
      const text = await response.text();
      console.error("VideoSDK Error:", text);
      return res.status(500).send(text);
    }

    const data = await response.json();
    res.json(data);

  } catch (error) {
    console.error("Server Error:", error);
    res.status(500).json({ error: error.message });
  }
});

app.listen(5000, () => {
  console.log("✅ Token server running on http://localhost:5000");
});
