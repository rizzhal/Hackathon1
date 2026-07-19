import express from "express"
import cors from "cors"
import resumeRoutes from "./routes/resumeRoute.js"
const app = express();

app.use(cors({
    origin:[
        "http://localhost:5173",
        "https://hackathon1-rouge-ten.vercel.app/"
    ],
    credentials: true
}))
app.use(express.json());

app.use("/api/resume" , resumeRoutes);

export default app;
