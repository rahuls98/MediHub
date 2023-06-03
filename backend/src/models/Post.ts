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

const readPosts = async (
    user:string
) => {
    try {
        return await Post.find({savedBy: { $ne: user }}).populate('author');
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
            model: 'Expert',
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

const createSavedPost = async (
    user:string,
    post:string
) => {
    try {
        await Post.updateOne({ _id: post }, { "$push": { 'savedBy': user }});
    } catch (error) {
        console.error('Error createSavedPost: ', error);
    }
}

const readUserSavedPosts = async (
    user:string
) => {
    try {
        const posts = await Post.find({ savedBy: user })
            .populate('author');
        return posts;
    } catch (error) {
        console.error('Error readUserSavedPosts: ', error);
    }
}

const deleteSavedPost = async (
    user:string,
    post:string
) => {
    try {
        await Post.updateOne({ _id: post }, { "$pull": { 'savedBy': user }});
    } catch (error) {
        console.error('Error deleteSavedPost: ', error);
    }
}

const PostModel = {
    createPost,
    readPosts,
    readPostsByAuthors,
    searchPostsByTopic,
    createSavedPost,
    readUserSavedPosts,
    deleteSavedPost
};

export default PostModel;