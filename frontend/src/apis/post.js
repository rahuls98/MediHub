import requestMethods from "./base";
import userUtils from "../utils/user";

const createPost = async (data) => {
    const userId = userUtils.getPangeaId();
    data['author'] = userId; //"64790812a87694aeb45fa145";
    data['profilePhoto'] = "";
    return await requestMethods.post('/post/', data);
}

const getAllPosts = async () => {
    const userId = userUtils.getPangeaId();
    return await requestMethods.get(`/post?user=${userId}`);
}

const getSavedPosts = async () => {
    const userId = userUtils.getPangeaId();
    return await requestMethods.get(`/post/saved?user=${userId}`);
}

const savePost = async (data) => {
    const userId = userUtils.getPangeaId();
    data['user'] = userId;
    return await requestMethods.put('/post/save', data);
}

const unsavePost = async (data) => {
    const userId = userUtils.getPangeaId();
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