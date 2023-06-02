import requestMethods from "./base";

const getUserFeed = async () => {
    const userDetails = JSON.parse(window.localStorage.getItem('user'));
    const userId = userDetails.user[0]._id;
    return await requestMethods.get(`/feed/${userId}`);
}

const getTrendingTopics = async () => {
    return await requestMethods.get('/feed/trending');
}

const feedApis = {
    getUserFeed,
    getTrendingTopics
}

export default feedApis;