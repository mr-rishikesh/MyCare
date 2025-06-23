import express from "express"
import { createPost, feed, myPosts } from "../controller/post.controller.js";


const postRouter = express.Router();

postRouter.get("/get-feed" , feed)
postRouter.get("/my-posts" , myPosts)
postRouter.post("/create-post" , createPost)


export default postRouter