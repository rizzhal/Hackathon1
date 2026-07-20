import express from "express";
import cors from "cors";
import resumeRoutes from "./routes/resumeRoute.js";

const app = express();

const allowedOrigins = [
  "http://localhost:5173",
  "https://hackathon1-rouge-ten.vercel.app",
];

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow Postman and server-to-server requests
      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      return callback(new Error(`Origin ${origin} not allowed by CORS`));
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());

app.use("/api/resume", resumeRoutes);

export default app;