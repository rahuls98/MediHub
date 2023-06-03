import requestMethods from "./base";
import userUtils from "../utils/user";

const userId = userUtils.getPangeaId();

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