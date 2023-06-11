import requestMethods from "./base";
import userUtils from "../utils/user";

const createPost = async (data) => {
    const userId = userUtils.getUserId();
    data['author'] = userId;
    data['profilePhoto'] = "";
    return await requestMethods.post('/post/', data);
}

const getAllPosts = async () => {
    const userId = userUtils.getUserId();
    return await requestMethods.get(`/post?user=${userId}`);
}

const getSavedPosts = async () => {
    const userId = userUtils.getUserId();
    return await requestMethods.get(`/post/saved?user=${userId}`);
}

const savePost = async (data) => {
    const userId = userUtils.getUserId();
    data['user'] = userId;
    return await requestMethods.put('/post/save', data);
}

const unsavePost = async (data) => {
    const userId = userUtils.getUserId();
    data['user'] = userId;
    return await requestMethods.put('/post/unsave', data);
}

const upvotePost = async (data) => {
    const userId = userUtils.getUserId();
    data['expert'] = userId;
    return await requestMethods.put('/post/upvote', data);
}

const removePostUpvote = async (data) => {
    const userId = userUtils.getUserId();
    data['expert'] = userId;
    return await requestMethods.del('/post/upvote', data);
}

const downvotePost = async (data) => {
    const userId = userUtils.getUserId();
    data['expert'] = userId;
    return await requestMethods.put('/post/downvote', data);
}

const removePostDownvote = async (data) => {
    const userId = userUtils.getUserId();
    data['expert'] = userId;
    return await requestMethods.del('/post/downvote', data);
}

const postApis = {
    createPost,
    getAllPosts,
    getSavedPosts,
    savePost,
    unsavePost,
    upvotePost,
    removePostUpvote,
    downvotePost,
    removePostDownvote,
}

export default postApis;