import requestMethods from "./base";

const userDetails = JSON.parse(window.localStorage.getItem('user'));
const user = userDetails.user[0]._id;

const getAllTopics = async () => {
    return await requestMethods.get('/topic');
}

const getExplorableTopics = async () => {
    return await requestMethods.get(`/topic?user=${user}`);
}

const getFollowingTopics = async () => {
    return await requestMethods.get('/topic');
}

const followTopic = async (data) => {
    data['user'] = user;
    return await requestMethods.post('/topic/follow/', data);
}

const unfollowTopic = async (data) => {
    data['user'] = user;
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