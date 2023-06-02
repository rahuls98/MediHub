import mongoose from "mongoose";
import UserFollowingExpertSchema from "../schemas/UserFollowingExpert";

const UserFollowingExpert = mongoose.model('UserFollowingExpert', UserFollowingExpertSchema);

const createUserFollowingExpert = async (
    user:string,
    expert:string
) => {
    try {
        const userFollowingExpert = new UserFollowingExpert({
            user,
            expert,
        })
        await userFollowingExpert.save();
    } catch (error) {
        console.error('Error createUserFollowingExpert: ', error);
    }
}

const readFollowedExperts = async  (
    user:string
) => {
    try {
        const followedExpertsObject = await UserFollowingExpert.find({ user }, { expert: true, _id: false })
            .populate('expert');
        let followedExperts:object[] = [];
        for (let object of followedExpertsObject) {
            followedExperts.push(object.expert);
        }
        return followedExperts;
    } catch (error) {
        console.error('Error readFollowedExperts: ', error);
    }
}

const deleteUserFollowingExpert = async (
    user:string,
    expert:string
) => {
    try {
        await UserFollowingExpert.deleteOne({ user, expert });
    } catch (error) {
        console.error('Error deleteUserFollowingExpert: ', error);
    }
}

const UserFollowingExpertModel = {
    createUserFollowingExpert,
    readFollowedExperts,
    deleteUserFollowingExpert
};

export default UserFollowingExpertModel;