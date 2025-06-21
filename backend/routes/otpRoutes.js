import { checkAuth, signUp, signin, verifyOtp } from "../controller/auth.controller.js";

import express from "express";
import { protectRoute } from "../middleware/auth.middleware.js";


const emailRouter = express.Router();

emailRouter.post("/signup" , signUp)
emailRouter.post("/verify-otp" , verifyOtp)
emailRouter.post("/signin"  , signin)
emailRouter.get("/check" , protectRoute , checkAuth)


export default emailRouter
