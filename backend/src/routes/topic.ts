import express, {Request, Response, Router} from "express";
import TopicModel from "../models/Topic";
import UserFollowingTopicModel from "../models/UserFollowingTopic";
import { verifyToken } from "../middleware/authorization";

const router:Router = express.Router();

router.get('/', verifyToken, async (req:Request, res:Response) => {
    const user:string = req.query.user?.toString() || "";
    const topicsToExclude:string[] = await UserFollowingTopicModel.readFollowedTopicsIds(user) || [];
    const topics:object[] = await TopicModel.readTopics(topicsToExclude) || [];
    res.status(200).send(topics);
})

router.post('/', verifyToken, async (req:Request, res:Response) => {
    const topic = req.body.topic;
    await TopicModel.createTopic(topic);
    res.status(201).send({
        "msg": "Success!"
    });
})

router.post('/follow', verifyToken, async (req:Request, res:Response) => {
    const userId:string = req.body.user;
    const topicId:string = req.body.topic;
    await UserFollowingTopicModel.createUserFollowingTopic(userId, topicId)
    res.status(201).send({
        "msg": "Success!"
    });
});

router.delete('/unfollow', verifyToken, async (req:Request, res:Response) => {
    const userId:string = req.body.user;
    const topicId:string = req.body.topic;
    await UserFollowingTopicModel.deleteUserFollowingTopic(userId, topicId)
    res.status(200).send({
        "msg": "Success!"
    });
});

export default router;