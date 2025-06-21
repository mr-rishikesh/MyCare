import Post from "../model/post.model.js";





export const myPosts = async  (req , res ) => {
    const {userId } = req.body;
    try {

        const posts = await Post.findById(userId);
        if(!posts) {
        return  res.status(200).json({
            message : "No Posts found for this user" ,
            
        })
    }
    return  res.status(200).json({
            message : "Successfully posts found for this user" ,
            data : posts 
            
        })

       
        
    } catch (error) {
        res.status(500).json({
            message : "something error in the myPosts "
        })
        
    }
}

export const feed =async (req , res) => {
      
       const user =  req.user;

       try {
         const feedPosts = await Post.find({
        tags: { $in: user.interests }  // Match user interests
        })
        .sort({upvotes: -1, createdAt: -1 })   // Newest first

        return res.status(201).json({
            message : "feedPosts are fetched sucessfully " ,
            data : feedPosts
        })
            
       
       } catch (error) {
        res.status(500).json({
            message : "something error in the feed fetch "
        })
        
       }

       
}
