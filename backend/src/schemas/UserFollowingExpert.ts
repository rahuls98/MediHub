import mongoose from "mongoose";

const UserFollowingExpertSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    expert: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Expert',
        required: true
    }
});

export default UserFollowingExpertSchema;