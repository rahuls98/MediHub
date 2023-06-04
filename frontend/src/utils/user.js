const getRole = () => {
    let userDetails = window.localStorage.getItem('user');
    userDetails = JSON.parse(userDetails);
    return userDetails.active_token.profile.role;
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

const userUtils = {
    getRole,
    getPangeaId,
    getUserName
}

export default userUtils;