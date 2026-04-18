import express from "express";
import authRoutes from "./routes/auth.js";
import cors from "cors";

const app = express();
app.use(
  cors({
    origin: ["https://hire-heaven-nu.vercel.app", "http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);
app.use(express.json());

app.use("/api/auth", authRoutes);

export default app;
