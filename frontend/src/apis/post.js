import requestMethods from "./base";

const userDetails = JSON.parse(window.localStorage.getItem('user'));
const userId = userDetails.user[0]._id;

const createPost = async (data) => {
    data['author'] = "64790812a87694aeb45fa145";
    data['profilePhoto'] = "";
    return await requestMethods.post('/post/', data);
}

const getAllPosts = async () => {
    return await requestMethods.get('/post');
}

const getSavedPosts = async () => {
    return await requestMethods.get(`/post/saved?user=${userId}`);
}

const savePost = async (data) => {
    data['user'] = userId;
    return await requestMethods.put('/post/save', data);
}

const unsavePost = async (data) => {
    data['user'] = userId;
    return await requestMethods.put('/post/unsave', data);
}

const postApis = {
    createPost,
    getAllPosts,
    getSavedPosts,
    savePost,
    unsavePost
}

export default postApis;