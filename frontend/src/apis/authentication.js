import requestMethods from "./base";

const createNewUser = async (data) => {
    return await requestMethods.post('/authentication/signup/', data);
}

const authenticationApis = {
    createNewUser
}

export default authenticationApis;