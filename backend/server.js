import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import userRoutes from "./routes/users.js";
import eventRoutes from "./routes/events.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(
  cors({
    origin: [
      'http://localhost:5173',
      'https://rsvpfullstackproject.netlify.app'
    ]
  })
);
app.use(express.json());

// MongoDB Connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((error) => console.error("❌ Error:", error));

// Routes
app.use("/api/users", userRoutes);
app.use("/api/events", eventRoutes);

// Root route
app.get("/", (req, res) => {
  res.json({
    message: "RSVP API",
    status: "Running",
    endpoints: {
      tasks: "/api/users",
      sessions: "/api/events",
    },
  });
});

// Health check
app.get("/health", (req, res) => {
  res.json({ status: "OK", timestamp: new Date() });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

