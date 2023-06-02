import requestMethods from "./base";

const signinUser = async (data) => {
    return await requestMethods.post('/authentication/signin/', data);
}

const signupUser = async (data) => {
    return await requestMethods.post('/authentication/signup/', data);
}

const authenticationApis = {
    signinUser,
    signupUser
}

export default authenticationApis;