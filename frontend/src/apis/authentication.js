import requestMethods from "./base";

const signinUser = async (data) => {
    return await requestMethods.post('/authentication/signin/', data, false);
}

const signupUser = async (data) => {
    return await requestMethods.post('/authentication/signup/', data, false);
}

const authenticationApis = {
    signinUser,
    signupUser
}

export default authenticationApis;