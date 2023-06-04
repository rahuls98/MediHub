import requestMethods from "./base";
import userUtils from "../utils/user";

const createSession = async (data) => {
    const userId = userUtils.getPangeaId();
    data["author"] = userId;
    return await requestMethods.post("/session/", data);
}

const getAllSessions = async () => {
    const userId = userUtils.getPangeaId();
    return await requestMethods.get(`/session?user=${userId}`);
}

const getEnrolledSessions = async () => {
    const userId = userUtils.getPangeaId();
    const enrolledSessions = await requestMethods.get(`/session/enrolled?user=${userId}`);
    return enrolledSessions;
}

const enrollInSession = async (data) => {
    const userId = userUtils.getPangeaId();
    data["user"] = userId;
    return await requestMethods.put('/session/enroll/', data);
}

const unenrollInSession = async (data) => {
    const userId = userUtils.getPangeaId();
    data["user"] = userId;
    return await requestMethods.put('/session/unenroll/', data);
}

const redactMessage = async (data) => {
    return await requestMethods.post('/session/message/redact/', data);
}

const sessionApis = {
    getAllSessions,
    getEnrolledSessions,
    createSession,
    enrollInSession,
    unenrollInSession,
    redactMessage
}

export default sessionApis;