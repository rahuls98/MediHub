import express, {Request, Response, Router} from "express";
import PostInterface from "../interfaces/Post";
import ExpertModel from "../models/Expert";
import PostModel from "../models/Post";
import SessionModel from "../models/Session";
import TopicModel from "../models/Topic";
import UserFollowingExpertModel from "../models/UserFollowingExpert";

const router:Router = express.Router();

router.get('/trending', async (req:Request, res:Response) => {
    const trendingTopics:object[] = await TopicModel.readTrendingTopics() || [];
    res.status(200).json({
        topics: trendingTopics
    });
});

router.get('/search', async (req:Request, res:Response) => {
    let searchTopic:string = req.query.query?.toString() || '';
    searchTopic = searchTopic.replace(/%20/g, " ");
    const relevantPosts:object[] = await PostModel.searchPostsByTopic(searchTopic);
    const relevantSessions:object[] = await SessionModel.searchSessionsByTopic(searchTopic) || [];
    const relevantTopics:object[] = await TopicModel.searchTopics(searchTopic) || [];
    const relevantExperts:object[] = await ExpertModel.searchExpertsByTopic(searchTopic) || [];
    await TopicModel.incrementSeachCounter(searchTopic);
    const relevant = {
        posts: relevantPosts,
        sessions: relevantSessions,
        topics: relevantTopics,
        experts: relevantExperts
    }
    res.status(200).json(relevant);
});

router.get('/:userId', async (req:Request, res:Response) => {
    const userId:string = req.params.userId;
    const followedExperts = await UserFollowingExpertModel.readFollowedExperts(userId) || [];
    const followedExpertsIds:string[] = followedExperts.map(expert => expert._id.toString());
    const followedExpertsPosts:PostInterface[] = await PostModel.readPostsByAuthors(followedExpertsIds, userId) || [];
    const followedExpertsSessions:object[] = await SessionModel.readSessionsByAuthors(followedExpertsIds, userId) || [];
    res.status(200).json({
        posts: followedExpertsPosts,
        sessions: followedExpertsSessions
    });
});

export default router;