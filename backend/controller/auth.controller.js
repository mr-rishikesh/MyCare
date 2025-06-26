import dotenv from "dotenv";

dotenv.config();

import nodemailer from "nodemailer";
import User from "../model/user.model.js";
import { generateToken } from "../lib/util.js";
import bcrypt from "bcrypt";



let signUpStore = {};

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});


const sendOtp = async (email , otp) => {
   

    const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Your OTP Code",
    text: `Your OTP is: ${otp}`,

     
  };
    await transporter.sendMail(mailOptions);


}



export const signUp = async (req, res) => {
  const {city, email, fullName, gender,  password , age } = req.body;

  console.log(email);
  const otp = Math.floor(100000 + Math.random() * 900000).toString();
 

  signUpStore[email] = {
    fullName,
    otp,
    gender,
    password,
    expiresAt: Date.now() + 50 * 60 * 1000, // 5 minutes ,
    city,
    age
  };


  try {
    const isUserExist = await User.findOne({ email });
    if (isUserExist) {
      return res
        .status(400)
        .json({
          success: false,
          message: "User already exists , Try to login",
        });
    }

   await sendOtp(email , otp)

  
    res.status(201).json({ success: true, message: "OTP sent to email Sucessfully." });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Failed to send OTP.", error: error });
  }
};

export const verifyOtp = async (req, res) => {
  const { email, otp } = req.body;
  const data = signUpStore[email];
  //console.log(email + otp +  " email + otp")
 // console.log(data +  " data")

  
  try {
    // console.log("entered into equal otp ")

    if (!data)
      return res
        .status(409)
        .json({ success: false, message: "OTP not found. not data" });
    if (Date.now() > data.expiresAt)
      return res.status(400).json({ success: false, message: "OTP expired." });
    // console.log("entered into equal otp ")
    if (otp !== data.otp)
      return res
        .status(402)
        .json({ success: false, message: "OTP not matched" });

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(data.password, salt);
    const newUser = new User({
      fullName: data.fullName,
      email,
      city: data.city,
      gender: data.gender,
      password: hashedPassword,
      age: data.age
    });
    await newUser.save();
    console.log("entered into equal otp ");
    console.log("after user");
  
    if (newUser) {
       const token = await generateToken(newUser._id, res);
       console.log("This is token" + token)
      
      return res.status(201).json({
        message: "Successfully Otp sent",
        data: newUser,
        token,
      });
    }
  } catch (error) {
    return res
      .status(400)
      .json({ success: false, message: "Invalid OTP.", error });
  }
};

export const signin = async (req , res) => {
    const {email , password} = req.body;
    if(!email || !password) {
        return res.status(401).json({
                message : "Put all credentals  "
            })
    }

    try {

        const user = await User.findOne({email});
        if(!user) {
            return res.status(401).json({
                message : "Invalid credentials  ,User not exists "
            })

        }
        const isPasswordMatch = await  bcrypt.compare(password , user.password);
        if(!isPasswordMatch) {
            return res.status(403).json({
                message : "Invalid credentials"
            })
        }

        const token =await  generateToken(user._id , res)
        console.log("This is token" + token)

        return res.status(200).json({
            message : "Successfully logined " ,
            data : user ,
            token
        })
        
    } catch (error) {

        res.status(500).json({success : false , message : "Something wrong in signup"})
        
    }
}

export const checkAuth = async  (req , res) => {
    try {

      
     const allUsers = await User.find();
        
        res.status(200).json({authUser :req.user , allUsers : allUsers});
        
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message : "Something wrong in checkAuth"
        })
        
    }
}
