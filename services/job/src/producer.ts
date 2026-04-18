import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

export const sendMail = async (message: {
  to: string;
  subject: string;
  html: string;
}) => {
  try {
    const uploadService =
      process.env.UPLOAD_SERVICE || "http://localhost:5001";
    await axios.post(`${uploadService}/api/utils/send-mail`, message);
    console.log(`Mail request sent for ${message.to}`);
  } catch (error) {
    console.error("Failed to send mail request", error);
  }
};
