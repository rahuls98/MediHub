import requestMethods from "./base";

const getAllSessions = async () => {
    return await requestMethods.get('/session');
}

const sessionApis = {
    getAllSessions
}

export default sessionApis;