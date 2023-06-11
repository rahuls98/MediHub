import express, {Request, Response, Router} from "express";
import ExpertModel from "../models/Expert";
import UserFollowingExpertModel from "../models/UserFollowingExpert";
import { verifyToken } from "../middleware/authorization";

const router:Router = express.Router();

router.get('/', verifyToken, async (req:Request, res:Response) => {
    const experts:object[] = await ExpertModel.readExperts();
    res.status(200).send(experts);
})

router.post('/', verifyToken, async (req:Request, res:Response) => {
    const pangeaUserId:string = req.body.pangeaUserId;
    const email:string = req.body.email;
    const fullname:string = req.body.fullname;
    const expertiseTopics:string[] = req.body.expertiseTopics;
    await ExpertModel.createExpert(fullname, email, pangeaUserId, expertiseTopics);
    res.status(201).send({
        "msg": "Success!"
    });
});

router.post('/follow', verifyToken, async (req:Request, res:Response) => {
    const userId:string = req.body.user;
    const expertId:string = req.body.expert;
    await UserFollowingExpertModel.createUserFollowingExpert(userId, expertId);
    await ExpertModel.increaseFollowerCount(expertId);
    res.status(201).send({
        "msg": "Success!"
    });
});

router.delete('/unfollow', verifyToken, async (req:Request, res:Response) => {
    const userId:string = req.body.user;
    const expertId:string = req.body.expert;
    await UserFollowingExpertModel.deleteUserFollowingExpert(userId, expertId);
    await ExpertModel.decreaseFollowerCount(expertId);
    res.status(200).send({
        "msg": "Success!"
    });
});

export default router;