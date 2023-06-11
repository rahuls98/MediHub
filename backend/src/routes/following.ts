import express, {Request, Response, Router} from "express";
import UserFollowingExpertModel from "../models/UserFollowingExpert";
import UserFollowingTopicModel from "../models/UserFollowingTopic";
import { verifyToken } from "../middleware/authorization";

const router:Router = express.Router();

router.get('/experts', verifyToken, async (req:Request, res:Response) => {
    const user:string = req.query.user?.toString() || "";
    const followedExperts = await UserFollowingExpertModel.readFollowedExperts(user) || [];
    res.status(200).send(followedExperts);
});

router.get('/topics', verifyToken, async (req:Request, res:Response) => {
    const user:string = req.query.user?.toString() || "";
    const followedTopics = await UserFollowingTopicModel.readFollowedTopics(user) || [];
    res.status(200).send(followedTopics);
});

export default router;