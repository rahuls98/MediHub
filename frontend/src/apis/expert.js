import userUtils from "../utils/user";
import requestMethods from "./base";

const getAllExperts = async () => {
    return await requestMethods.get('/expert');
}

const getFollowingExperts = async () => {
    return await requestMethods.get('/expert');
}

const followExpert = async (data) => {
    data['user'] = userUtils.getPangeaId();
    return await requestMethods.post('/expert/follow/', data);
}

const unfollowExpert = async (data) => {
    data['user'] = userUtils.getPangeaId();
    return await requestMethods.del('/expert/unfollow/', data);
}

const expertApis = {
    getAllExperts,
    getFollowingExperts,
    followExpert,
    unfollowExpert
}

export default expertApis;