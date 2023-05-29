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

const UserModel = {
    createUser,
    readUsers,
    readUserSavedPosts
};

export default UserModel;