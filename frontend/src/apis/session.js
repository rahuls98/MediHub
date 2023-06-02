import requestMethods from "./base";

const userDetails = JSON.parse(window.localStorage.getItem('user'));
const userId = userDetails.user[0]._id;

const createSession = async (data) => {
    data["author"] = userId;
    return await requestMethods.post("/session/", data);
}

const getAllSessions = async () => {
    return await requestMethods.get(`/session?user=${userId}`);
}

const getEnrolledSessions = async () => {
    const enrolledSessions = await requestMethods.get(`/session/enrolled?user=${userId}`);
    console.log(enrolledSessions);
    return enrolledSessions;
}

const enrollInSession = async (data) => {
    data["user"] = userId;
    return await requestMethods.put('/session/enroll/', data);
}

const unenrollInSession = async (data) => {
    data["user"] = userId;
    return await requestMethods.put('/session/unenroll/', data);
}

const sessionApis = {
    getAllSessions,
    getEnrolledSessions,
    createSession,
    enrollInSession,
    unenrollInSession
}

export default sessionApis;