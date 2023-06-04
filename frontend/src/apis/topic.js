import requestMethods from "./base";
import userUtils from "../utils/user";

const getAllTopics = async () => {
    return await requestMethods.get('/topic');
}

const getExplorableTopics = async () => {
    const userId = userUtils.getPangeaId();
    return await requestMethods.get(`/topic?user=${userId}`);
}

const getFollowingTopics = async () => {
    return await requestMethods.get('/topic');
}

const followTopic = async (data) => {
    const userId = userUtils.getPangeaId();
    data['user'] = userId;
    return await requestMethods.post('/topic/follow/', data);
}

const unfollowTopic = async (data) => {
    const userId = userUtils.getPangeaId();
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