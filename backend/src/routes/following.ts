import express, {Request, Response, Router} from "express";
import ExpertModel from "../models/Expert";
import TopicModel from "../models/Topic";
import UserFollowingExpertModel from "../models/UserFollowingExpert";
import UserFollowingTopicModel from "../models/UserFollowingTopic";

const router:Router = express.Router();

router.get('/experts', async (req:Request, res:Response) => {
    const user:string = req.query.user?.toString() || "";
    const followedExperts = await UserFollowingExpertModel.readFollowedExperts(user) || [];
    res.status(200).send(followedExperts);
});

router.get('/topics', async (req:Request, res:Response) => {
    const user:string = req.query.user?.toString() || "";
    const followedTopics = await UserFollowingTopicModel.readFollowedTopics(user) || [];
    res.status(200).send(followedTopics);
});

export default router;