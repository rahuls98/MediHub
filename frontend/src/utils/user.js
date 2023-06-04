const getRole = () => {
    let userDetails = window.localStorage.getItem('user');
    userDetails = JSON.parse(userDetails);
    return userDetails.active_token.profile.role;
}

const getExpertIsVerified = () => {
    let userDetails = window.localStorage.getItem('user');
    userDetails = JSON.parse(userDetails);
    return userDetails.isVerified.verified;
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
    getRole,
    getExpertIsVerified,
    getPangeaId,
    getUserId,
    getUserName
}

export default userUtils;