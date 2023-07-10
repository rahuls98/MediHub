import mongoose from "mongoose";
import TopicSchema from "../schemas/Topic";

const Topic = mongoose.model("Topic", TopicSchema);

const createTopic = async (title: string) => {
    try {
        const topic = new Topic({ title });
        await topic.save();
    } catch (error) {
        console.error("Error createTopic: ", error);
    }
};

const readTopics = async (topicsToExclude: string[]) => {
    try {
        const topics: object[] = await Topic.find({
            _id: { $nin: topicsToExclude },
        }).limit(100);
        return topics;
    } catch (error) {
        console.error("Error readTopics: ", error);
    }
};

const searchTopics = async (searchCriteria: string) => {
    try {
        const regex = new RegExp(searchCriteria, "i");
        const topics: object[] = await Topic.find({
            title: { $regex: regex },
        }).limit(100);
        return topics;
    } catch (error) {
        console.error("Error searchTopics: ", error);
    }
};

const readTrendingTopics = async () => {
    try {
        const topics: object[] = await Topic.find()
            .sort({ searchCounter: -1 })
            .limit(15);
        return topics;
    } catch (error) {
        console.error("Error readTrendingTopics: ", error);
    }
};

const readTopicsById = async (topicIds: string[]) => {
    try {
        const objectIdTopicIds = topicIds.map(
            (id) => new mongoose.Types.ObjectId(id)
        );
        const topics: object[] = await Topic.find({
            _id: { $in: objectIdTopicIds },
        });
        return topics;
    } catch (error) {
        console.error("Error readTopicsById: ", error);
    }
};

const incrementSeachCounter = async (topic: string) => {
    try {
        await Topic.updateOne({ title: topic }, { $inc: { searchCounter: 1 } });
    } catch (error) {
        console.error("Error incrementSeachCounter: ", error);
    }
};

const TopicModel = {
    createTopic,
    readTopics,
    searchTopics,
    readTrendingTopics,
    readTopicsById,
    incrementSeachCounter,
};

export default TopicModel;
