import express, {Request, Response, Router} from "express";
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
    const searchTopic:string = req.query.query?.toString() || '';
    const relevantPosts:object[] = await PostModel.searchPostsByTopic(searchTopic);
    const relevantSessions:object[] = await SessionModel.searchSessionsByTopic(searchTopic) || [];
    const relevant = {
        posts: relevantPosts,
        sessions: relevantSessions
    }
    res.status(200).json(relevant);
});

router.get('/:userId', async (req:Request, res:Response) => {
    const userId:string = req.params.userId;
    const followedExperts = await UserFollowingExpertModel.readFollowedExperts(userId) || [];
    const followedExpertsIds:string[] = followedExperts.map(expert => expert._id.toString());
    const followedExpertsPosts:object[] = await PostModel.readPostsByAuthors(followedExpertsIds);
    const followedExpertsSessions:object[] = await SessionModel.readSessionsByAuthors(followedExpertsIds) || [];
    res.status(200).json({
        posts: followedExpertsPosts,
        sessions: followedExpertsSessions
    });
});

export default router;