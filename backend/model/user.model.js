import mongoose  from "mongoose";


const userSchema = new  mongoose.Schema({
    email : {
        type : String ,
        required : true ,
        unique : true 

    } ,
    fullName : {
        type : String ,
        required : true ,

    },
    password : {
        type : String ,
        required : true ,
        minlength : 6
    },
    profilePic : {
        type : String ,
        default: ""
    } ,
    gender: {
        type : String ,
        required : true 
    } ,
    city: {
        type : String ,
        required : true 
    },
    interests : {
       type :  [String] ,
       default : ["Diabetes", "Anxiety","covid-19" , "fitness" ]
    } , 
    age : {
        type : Number,
        required : true 
    }
   

} , {timestamps : true})

const User = mongoose.model("User" , userSchema)

export default User