import requestMethods from "./base";

const getAllTopics = async () => {
    return await requestMethods.get('/topic');
}

const getFollowingTopics = async () => {
    return await requestMethods.get('/topic');
}

const topicApis = {
    getAllTopics,
    getFollowingTopics
}

export default topicApis;