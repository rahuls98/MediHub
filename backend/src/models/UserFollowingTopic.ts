import mongoose from "mongoose";
import UserFollowingTopicSchema from "../schemas/UserFollowingTopic";

const UserFollowingTopic = mongoose.model('UserFollowingTopic', UserFollowingTopicSchema);

const createUserFollowingTopic = async (
    user:string,
    topic:string
) => {
    try {
        const userFollowingTopic = new UserFollowingTopic({
            user,
            topic,
        })
        await userFollowingTopic.save();
    } catch (error) {
        console.error('Error createUserFollowingTopic: ', error);
    }
}

const readFollowedTopics = async  (
    user:string
) => {
    try {
        const followedTopicsObjects = await UserFollowingTopic.find({ user }, { 
            _id: false,
            topic: true 
        });
        let followedTopics:string[] = followedTopicsObjects.map(followedTopic => 
            followedTopic.topic.valueOf().toString());
        return followedTopics;
    } catch (error) {
        console.error('Error readFollowedTopics: ', error);
    }
}

const deleteUserFollowingTopic = async (
    user:string,
    topic:string
) => {
    try {
        await UserFollowingTopic.deleteOne({ user, topic });
    } catch (error) {
        console.error('Error deleteUserFollowingTopic: ', error);
    }
}

const UserFollowingTopicModel = {
    createUserFollowingTopic,
    readFollowedTopics,
    deleteUserFollowingTopic
};

export default UserFollowingTopicModel;