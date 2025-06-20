import express from "express";
import cors from "cors"
import dotenv from "dotenv"
import emailRouter from "./routes/otpRoutes.js";
import connectDB from "./lib/db.js";
import reportRouter from "./routes/report.route.js";
dotenv.config();

const app = express();
//app.use(cors());
app.use(express.json());
app.use(express.static("public"));
import cookieParser from 'cookie-parser';
app.use(cookieParser());

app.use(cors({
  origin: "http://localhost:5173",   // frontend origin
  credentials: true,                 // allow credentials (cookies, auth headers)
}));

connectDB();


app.use("/auth" , emailRouter)
app.use("/report" , reportRouter)
app.listen(3000 , ()=> {
    console.log("server is listening at port 3000")
})

