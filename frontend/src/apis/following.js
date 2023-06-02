import requestMethods from "./base";

const userDetails = JSON.parse(window.localStorage.getItem('user'));
const userId = userDetails.user[0]._id;

const getFollowingExperts = async () => {
    return await requestMethods.get(`/following/experts?user=${userId}`);
}

const getFollowingTopics = async () => {
    return await requestMethods.get(`/following/topics?user=${userId}`);
}

const followingApis = {
    getFollowingExperts,
    getFollowingTopics
}

export default followingApis;