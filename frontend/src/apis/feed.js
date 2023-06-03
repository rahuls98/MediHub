import requestMethods from "./base";
import userUtils from "../utils/user";

const getUserFeed = async () => {
    const userId = userUtils.getPangeaId();
    return await requestMethods.get(`/feed/${userId}`);
}

const getTrendingTopics = async () => {
    return await requestMethods.get('/feed/trending');
}

const search = async (searchQuery) => {
    return await requestMethods.get(`/feed/search?query=${searchQuery}`);
}

const feedApis = {
    getUserFeed,
    getTrendingTopics,
    search
}

export default feedApis;