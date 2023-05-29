const mongoose = require('mongoose');
import PostSchema from "../schemas/Post";

const Post = mongoose.model('Post', PostSchema);

const createPost = async (
    author:string, 
    profilePhoto:string, 
    topics:string[],
    content:string, 
) => {
    try {
        const post = new Post({
            author,
            profilePhoto,
            topics,
            content
        })
        await post.save();
    } catch (error) {
        console.error('Error createPost: ', error);
    }
}

const readPostsByAuthors = async (
    authors:string[]
) => {
    try {
        const posts = await Post.find({ author: { "$in": authors } });
        console.log("Posts: ", posts);
    } catch (error) {
        console.error('Error readPostsByAuthors: ', error);
    }
}

const PostModel = {
    createPost,
    readPostsByAuthors
};

export default PostModel;