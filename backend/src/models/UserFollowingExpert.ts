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
        const followedExperts = await UserFollowingExpert.find({ user }, { 
            _id: false,
            expert: true 
        });
        console.log(followedExperts);
    } catch (error) {
        console.error('Error readFollowedExperts: ', error);
    }
}

const UserFollowingExpertModel = {
    createUserFollowingExpert,
    readFollowedExperts
};

export default UserFollowingExpertModel;