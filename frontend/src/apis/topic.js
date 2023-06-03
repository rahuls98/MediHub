import requestMethods from "./base";
import userUtils from "../utils/user";

const userId = userUtils.getPangeaId();

const getAllTopics = async () => {
    return await requestMethods.get('/topic');
}

const getExplorableTopics = async () => {
    return await requestMethods.get(`/topic?user=${userId}`);
}

const getFollowingTopics = async () => {
    return await requestMethods.get('/topic');
}

const followTopic = async (data) => {
    data['user'] = userId;
    return await requestMethods.post('/topic/follow/', data);
}

const unfollowTopic = async (data) => {
    data['user'] = userId;
    return await requestMethods.del('/topic/unfollow/', data);
}

const topicApis = {
    getAllTopics,
    getExplorableTopics,
    getFollowingTopics,
    followTopic,
    unfollowTopic
}

export default topicApis;