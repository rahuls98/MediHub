import mongoose from "mongoose";
import TopicSchema from "../schemas/Topic";

const Topic = mongoose.model('Topic', TopicSchema);

const createTopic = async (
    title:string
) => {
    try {
        const topic = new Topic({title});
        await topic.save();
    } catch (error) {
        console.error('Error createTopic: ', error);
    }
}

const readTopics = async () => {
    try {
        const topics:object[] = await Topic.find();
        return topics;
    } catch (error) {
        console.error('Error readTopics: ', error);
    }
}

const readTrendingTopics = async () => {
    try {
        const topics:object[] = await Topic.find()
            .sort({ searchCounter: -1 })
            .limit(30);
        return topics;
    } catch (error) {
        console.error('Error readTrendingTopics: ', error);
    }
}

const readTopicsById = async (
    topicIds:string[]
) => {
    try {
        const objectIdTopicIds = topicIds.map(id => new mongoose.Types.ObjectId(id));
        const topics:object[] = await Topic.find({ _id: { "$in": objectIdTopicIds } });
        return topics;
    } catch (error) {
        console.error('Error readTopicsById: ', error);
    }
}

const TopicModel = {
    createTopic,
    readTopics,
    readTrendingTopics,
    readTopicsById
};

export default TopicModel;