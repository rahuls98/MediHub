const getBearerToken = () => {
    let userDetails = window.localStorage.getItem('user');
    userDetails = JSON.parse(userDetails);
    return userDetails.active_token.token;
}

const getRole = () => {
    let userDetails = window.localStorage.getItem('user');
    userDetails = JSON.parse(userDetails);
    return userDetails.active_token.profile.role;
}

const getExpertIsVerified = () => {
    let userDetails = window.localStorage.getItem('user');
    userDetails = JSON.parse(userDetails);
    return userDetails.isVerified;
}

const getPangeaId = () => {
    let userDetails = window.localStorage.getItem('user');
    userDetails = JSON.parse(userDetails);
    return userDetails.user[0]._id;
}

const getUserName = () => {
    let userDetails = window.localStorage.getItem('user');
    userDetails = JSON.parse(userDetails);
    return userDetails.active_token.profile.fullname;
}

const getUserId = () => {
    let userDetails = window.localStorage.getItem('user');
    userDetails = JSON.parse(userDetails);
    return userDetails.user[0]._id;
}

const userUtils = {
    getBearerToken,
    getRole,
    getExpertIsVerified,
    getPangeaId,
    getUserId,
    getUserName
}

export default userUtils;