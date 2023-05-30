import express, {Request, Response, Router} from "express";
import UserFollowingTopicModel from "../models/UserFollowingTopic";

const router:Router = express.Router();

router.post('/follow', async (req:Request, res:Response) => {
    const userId:string = req.body.user;
    const topicId:string = req.body.topic;
    await UserFollowingTopicModel.createUserFollowingTopic(userId, topicId)
    res.status(201).send({
        "msg": "Success!"
    });
});

router.delete('/unfollow', async (req:Request, res:Response) => {
    const userId:string = req.body.user;
    const topicId:string = req.body.topic;
    await UserFollowingTopicModel.deleteUserFollowingTopic(userId, topicId)
    res.status(200).send({
        "msg": "Success!"
    });
});

export default router;