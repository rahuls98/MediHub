let userDetails = window.localStorage.getItem('user');
userDetails = JSON.parse(userDetails);

const getRole = () => {
    return userDetails.active_token.profile.role;
}

const getPangeaId = () => {
    return userDetails.user[0]._id;
}

const getUserName = () => {
    return userDetails.active_token.profile.fullname;
}

const userUtils = {
    getRole,
    getPangeaId,
    getUserName
}

export default userUtils;