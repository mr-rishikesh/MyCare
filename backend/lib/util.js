import jwt from "jsonwebtoken"
import dotenv from 'dotenv';
dotenv.config();



export const generateToken = async (userId , res) => {
    const token = jwt.sign({userId} , process.env.JWT_SECRET , {expiresIn : "7d"});
    console.log("Token is " + token);
    

        res.cookie("jwt" , token , {
        maxAge : 7*24*60*60*1000 , //ms
        httpOnly : true ,
        sameSite : "strict" ,
        secure : process.env.NODE_ENV != "development"
    })

    return token;

}