import requestMethods from "./base";

const getAllExperts = async () => {
    return await requestMethods.get('/expert');
}

const getFollowingExperts = async () => {
    return await requestMethods.get('/expert');
}

const followExpert = async (data) => {
    const userDetails = JSON.parse(window.localStorage.getItem('user'));
    data['user'] = userDetails.user[0]._id;
    return await requestMethods.post('/expert/follow/', data);
}

const unfollowExpert = async (data) => {
    const userDetails = JSON.parse(window.localStorage.getItem('user'));
    data['user'] = userDetails.user[0]._id;
    return await requestMethods.del('/expert/unfollow/', data);
}

const expertApis = {
    getAllExperts,
    getFollowingExperts,
    followExpert,
    unfollowExpert
}

export default expertApis;