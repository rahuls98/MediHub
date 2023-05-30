import express, {Request, Response, Router} from "express";
import UserFollowingExpertModel from "../models/UserFollowingExpert";

const router:Router = express.Router();

router.post('/follow', async (req:Request, res:Response) => {
    const userId:string = req.body.user;
    const expertId:string = req.body.expert;
    await UserFollowingExpertModel.createUserFollowingExpert(userId, expertId)
    res.status(201).send({
        "msg": "Success!"
    });
});

router.delete('/unfollow', async (req:Request, res:Response) => {
    const userId:string = req.body.user;
    const expertId:string = req.body.expert;
    await UserFollowingExpertModel.deleteUserFollowingExpert(userId, expertId)
    res.status(200).send({
        "msg": "Success!"
    });
});

export default router;