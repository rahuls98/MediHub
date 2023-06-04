import mongoose from "mongoose";
import SessionInterface from "../interfaces/Session";
import SessionSchema from "../schemas/Session";

const Session = mongoose.model('Session', SessionSchema);

const createSession = async (
    author:string,
    title:string,
    description:string,
    date:string,
    time:string,
    topics:string[]
) => {
    try {
        const session = new Session({ author, title, description, sessionDate: date, sessionTime: time, topics});
        await session.save();
    } catch (error) {
        console.error('Error createSession: ', error);
    }
}

const readSessions = async (
    user:string
) => {
    try {
        return await Session.find({interestedUsers: {$ne: user }}).populate('author');
    } catch (error) {
        console.error('Error readSessions: ', error);
    }
}

const readSessionsByAuthors = async (
    authors:string[],
    user:string
) => {
    try {
        const sessions:SessionInterface[] = await Session.find({ author: { "$in": authors } }, {} , {createdDate : -1})
        .populate({
            path: 'author',
            model: 'Expert',
        });
        const sessionsWithSavedInfo = sessions.map(session => {
            const updatedSession:SessionInterface = {...session};
            if (session.interestedUsers.includes(new mongoose.Types.ObjectId(user))) {
                updatedSession['enrolled'] = true;
            }
            return updatedSession
        })
        return sessionsWithSavedInfo;
    } catch (error) {
        console.error('Error readSessionsByAuthors: ', error);
    }
}

const readSessionsByUser = async (
    user:string
) => {
    try {
        const sessions = await Session.find({ interestedUsers: user }, { interestedUsers: false });
        return sessions;
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

const addEnrollment = async (
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

const deleteEnrollment = async (
    id:string,
    user:string
) => {
    try {
        await Session.findOneAndUpdate(
            { _id: id },
            { $pull: { interestedUsers: user } },
            { new: true }
        )
    } catch (error) {
        console.log("Error editSessionForInterestedUser: ", error);
    }
}

const SessionModel = {
    createSession,
    readSessions,
    readSessionsByAuthors,
    readSessionsByUser,
    searchSessionsByTopic,
    addEnrollment,
    deleteEnrollment
}

export default SessionModel;