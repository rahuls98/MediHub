import express, {Request, Response, Router} from "express";
import ExpertModel from "../models/Expert";
import UserFollowingExpertModel from "../models/UserFollowingExpert";

const router:Router = express.Router();

router.get('/', async (req:Request, res:Response) => {
    const experts:object[] = await ExpertModel.readExperts();
    res.status(200).send(experts);
})

router.post('/',  async (req:Request, res:Response) => {
    const pangeaUserId:string = req.body.pangeaUserId;
    const email:string = req.body.email;
    const fullname:string = req.body.fullname;
    const expertiseTopics:string[] = req.body.expertiseTopics;
    await ExpertModel.createExpert(fullname, email, pangeaUserId, expertiseTopics);
    res.status(201).send({
        "msg": "Success!"
    });
});

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