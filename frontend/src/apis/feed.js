import requestMethods from "./base";

const getUserFeed = async () => {
    const userDetails = JSON.parse(window.localStorage.getItem('user'));
    const userId = userDetails.user[0]._id;
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