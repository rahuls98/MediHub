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
        const followedExpertsObjects = await UserFollowingExpert.find({ user }, { 
            _id: false,
            expert: true 
        });
        let followedExperts:string[] = followedExpertsObjects.map(followedExpert => 
            followedExpert.expert.valueOf().toString());
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