const mongoose = require('mongoose');
import UserSchema from "../schemas/User";

const User = mongoose.model('User', UserSchema);

const createUser = async (
    pangeaUserId:string, 
    email:string, 
    fullname:string, 
    savedPosts:string[]
) => {
    try {
        const user = new User({
            pangeaUserId,
            email,
            fullname,
            savedPosts
        })
        await user.save();
    } catch (error) {
        console.error('Error createUser: ', error);
    }
}

const createSavedPost = async (
    user:string,
    post:string
) => {
    try {
        await User.updateOne({ _id: user }, { "$push": { 'savedPosts': post}});
    } catch (error) {
        console.error('Error createSavedPost: ', error);
    }
}

const readUsers = async () => {
    try {
        const users = await User.find();
        console.log("Users: ", users);
    } catch (error) {
        console.error('Error readUsers: ', error);
    }
}

const readUserSavedPosts = async (
    user:string
) => {
    try {
        const posts = await User.find({ _id: user }, { savedPosts: 1, _id: 0 });
        console.log("Posts: ", posts);
    } catch (error) {
        console.error('Error readUserSavedPosts: ', error);
    }
}

const deleteSavedPost = async (
    user:string,
    post:string
) => {
    try {
        await User.updateOne({ _id: user }, { "$pull": { 'savedPosts': post}});
    } catch (error) {
        console.error('Error deleteSavedPost: ', error);
    }
}

const UserModel = {
    createUser,
    createSavedPost,
    readUsers,
    readUserSavedPosts,
    deleteSavedPost
};

export default UserModel;