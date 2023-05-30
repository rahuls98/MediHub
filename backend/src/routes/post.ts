import express, {Request, Response, Router} from "express";
import UserModel from "../models/User";

const router:Router = express.Router();

router.post('/', async (req:Request, res:Response) => {});

router.put('/upvote', async (req:Request, res:Response) => {});

router.put('/downvote', async (req:Request, res:Response) => {});

router.get('/saved', async (req:Request, res:Response) => {});

router.put('/save', async (req:Request, res:Response) => {
    const post:string = req.query.post?.toString() || "";
    const user:string = "6473a42478d6ba47f364b4b4";
    UserModel.createSavedPost(user, post);
    res.status(200).send({
        "msg": "Success!"
    });
});

router.put('/unsave', async (req:Request, res:Response) => {
    const post:string = req.query.post?.toString() || "";
    const user:string = "6473a42478d6ba47f364b4b4";
    UserModel.deleteSavedPost(user, post);
    res.status(200).send({
        "msg": "Success!"
    });
});

export default router;