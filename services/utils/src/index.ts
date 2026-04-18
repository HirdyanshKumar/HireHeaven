import express from "express";
import dotenv from "dotenv";
import routes from "./routes.js";
import cors from "cors";
import { v2 as cloudinary } from "cloudinary";
import nodemailer from "nodemailer";

dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

const app = express();
app.use(
  cors({
    origin: ["https://hire-heaven-two.vercel.app", "http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

app.use("/api/utils", routes);

// Direct email endpoint (replaces Kafka consumer)
app.post("/api/utils/send-mail", async (req, res) => {
  try {
    const { to, subject, html } = req.body;

    if (!to || !subject || !html) {
      return res.status(400).json({ message: "to, subject, and html are required" });
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: "HireHeaven <no-reply>",
      to,
      subject,
      html,
    });

    console.log(`Mail has been sent to ${to}`);
    res.json({ message: "Mail sent successfully" });
  } catch (error: any) {
    console.error("Failed to send mail", error);
    res.status(500).json({ message: "Failed to send mail" });
  }
});

app.listen(process.env.PORT, () => {
  console.log(
    `Utils Service is running on http://localhost:${process.env.PORT}`
  );
});
