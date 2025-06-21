




import mongoose  from "mongoose";


const postSchema = mongoose.Schema({
    posterId : {
        type : mongoose.Schema.Types.ObjectId ,
        ref : "User" ,
        required : true ,
    } ,
    title : {
        type : String ,
        default : "Report "
    } ,
    image : {
        type : String ,

    },
    
    upvote : {
        type : Number ,
        default : 0

    } ,
     tags: [String],
} , {timestamps : true})

const Post = mongoose.model("Post" , postSchema)

export default Post
