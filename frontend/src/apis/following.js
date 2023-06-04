import requestMethods from "./base";
import userUtils from "../utils/user";

const getFollowingExperts = async () => {
    const userId = userUtils.getPangeaId();
    return await requestMethods.get(`/following/experts?user=${userId}`);
}

const getFollowingTopics = async () => {
    const userId = userUtils.getPangeaId();
    return await requestMethods.get(`/following/topics?user=${userId}`);
}

const followingApis = {
    getFollowingExperts,
    getFollowingTopics
}

export default followingApis;