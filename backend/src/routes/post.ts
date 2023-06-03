import express, {Request, Response, Router} from "express";
import PostModel from "../models/Post";
import UserModel from "../models/User";

const router:Router = express.Router();

router.get('/', async (req:Request, res:Response) => {
    const user:string = req.query.user?.toString() || "";
    const posts:object[] = await PostModel.readPosts(user) || [];
    res.status(200).send(posts);
});

router.post('/', async (req:Request, res:Response) => {
    const author:string = req.body.author;
    const profilePhoto:string = req.body.profilePhoto;
    const topics:string[] = req.body.topics;
    const content:string = req.body.content;
    const createRes = await PostModel.createPost(author, profilePhoto, topics, content);
    if (createRes)
        res.status(200).send({
            "msg": "Success!"
        });
    else
        res.status(403).send({
            "msg": "Content cannot contain any personal information/vulgarity!"
        });
});

router.put('/upvote', async (req:Request, res:Response) => {});

router.put('/downvote', async (req:Request, res:Response) => {});

router.get('/saved', async (req:Request, res:Response) => {
    const user:string = req.query.user?.toString() || "";
    const posts = await PostModel.readUserSavedPosts(user);
    res.status(200).send(posts);
});

router.put('/save', async (req:Request, res:Response) => {
    const post:string = req.body.post;
    const user:string = req.body.user;
    await PostModel.createSavedPost(user, post);
    res.status(200).send({
        "msg": "Success!"
    });
});

router.put('/unsave', async (req:Request, res:Response) => {
    const post:string = req.body.post;
    const user:string = req.body.user;
    await PostModel.deleteSavedPost(user, post);
    res.status(200).send({
        "msg": "Success!"
    });
});

export default router;