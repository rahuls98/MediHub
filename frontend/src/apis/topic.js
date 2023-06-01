import requestMethods from "./base";

const getAllTopics = async () => {
    return await requestMethods.get('/topic');
}

const topicApis = {
    getAllTopics
}

export default topicApis;