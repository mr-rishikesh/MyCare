import { checkAuth, signUp, signin, verifyOtp } from "../controller/auth.controller.js";

import express from "express";
import { protectRoute } from "../middleware/auth.middleware.js";


const authRouter = express.Router();

authRouter.post("/signup" , signUp)
authRouter.post("/verify-otp" , verifyOtp)
authRouter.post("/signin"  , signin)
authRouter.get("/check" , protectRoute , checkAuth)


export default authRouter
