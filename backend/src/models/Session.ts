import mongoose from "mongoose";
import SessionSchema from "../schemas/Session";

const Session = mongoose.model('Session', SessionSchema);

const createSession = async (
    author:string
) => {
    try {
        const session = new Session({ author });
        await session.save();
    } catch (error) {
        console.error('Error createSession: ', error);
    }
}

const readSessionsByAuthors = async (
    authors:string[]
) => {
    try {
        const sessions = await Session.find({ author: { "$in": authors } });
        console.log("Sessions: ", sessions);
    } catch (error) {
        console.error('Error readSessionsByAuthors: ', error);
    }
}

const readSessionsByUser = async (
    user:string
) => {
    try {
        const sessions = await Session.find({ interestedUsers: user });
        console.log("Sessions: ", sessions);
    } catch (error) {
        console.error('Error readSessionsByUser: ', error);
    }
}

const searchSessionsByTopic = async (
    topic:string
) => {
    try {
        const sessions = await Session.find({ topics: topic });
        return sessions;
    } catch (error) {
        console.error('Error searchSessionsByTopic: ', error);
    }
}

const editSessionForInterestedUser = async (
    id:string,
    user:string
) => {
    try {
        await Session.findOneAndUpdate(
            { _id: id },
            { $addToSet: { interestedUsers: user } },
            { new: true }
        )
    } catch (error) {
        console.log("Error editSessionForInterestedUser: ", error);
    }
}

const SessionModel = {
    createSession,
    readSessionsByAuthors,
    readSessionsByUser,
    searchSessionsByTopic,
    editSessionForInterestedUser
}

export default SessionModel;