import requestMethods from "./base";

const getUserFeed = async () => {
    return await requestMethods.get('/feed/6473a42478d6ba47f364b4b4');
}

const getTrendingTopics = async () => {
    return await requestMethods.get('/feed/trending');
}

const feedApis = {
    getUserFeed,
    getTrendingTopics
}

export default feedApis;