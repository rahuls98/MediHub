import requestMethods from "./base";

const createPost = async (data) => {
    data['author'] = "64790812a87694aeb45fa145";
    data['profilePhoto'] = "";
    return await requestMethods.post('/post/', data);
}

const getAllPosts = async () => {
    return await requestMethods.get('/post');
}

const postApis = {
    createPost,
    getAllPosts
}

export default postApis;