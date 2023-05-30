import express, {Request, Response, Router} from "express";
import ExpertModel from "../models/Expert";
import TopicModel from "../models/Topic";
import UserFollowingExpertModel from "../models/UserFollowingExpert";
import UserFollowingTopicModel from "../models/UserFollowingTopic";

const router:Router = express.Router();

router.get('/experts', async (req:Request, res:Response) => {
    const userId:string = "6473a42478d6ba47f364b4b4";
    const followedExpertIds:string[] = await UserFollowingExpertModel.readFollowedExperts(userId) || [];
    const followedExperts:object[] = await ExpertModel.readExpertsById(followedExpertIds) || [];
    res.status(200).send(followedExperts);
});

router.get('/topics', async (req:Request, res:Response) => {
    const userId:string = "6473a42478d6ba47f364b4b4";
    const followedTopicIds:string[] = await UserFollowingTopicModel.readFollowedTopics(userId) || [];
    const followedTopics:object[] = await TopicModel.readTopicsById(followedTopicIds) || [];
    res.status(200).send(followedTopics);
});

export default router;