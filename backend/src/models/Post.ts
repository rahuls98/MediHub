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

const readPosts = async () => {
    try {
        return await Post.find();
    } catch (error) {
        console.error('Error readPosts: ', error);
    }
}

const readPostsByAuthors = async (
    authors:string[]
) => {
    try {
        const posts = await Post.find({ author: { "$in": authors }}, {} , {createdDate : -1})
        .populate({
            path: 'author',
            model: 'ExpertSchema',
        });
        return posts;
    } catch (error) {
        console.error('Error readPostsByAuthors: ', error);
    }
}

const searchPostsByTopic = async (
    topic:string
) => {
    try {
        const posts = await Post.find({ topics: topic });
        return posts;
    } catch (error) {
        console.error('Error searchPostsByTopic: ', error);
    }
}

const PostModel = {
    createPost,
    readPosts,
    readPostsByAuthors,
    searchPostsByTopic
};

export default PostModel;