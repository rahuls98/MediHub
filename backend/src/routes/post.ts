import express, {Request, Response, Router} from "express";
import PostModel from "../models/Post";
import { verifyToken } from "../middleware/authorization";

const router:Router = express.Router();

router.get('/', verifyToken, async (req:Request, res:Response) => {
    const user:string = req.query.user?.toString() || "";
    const posts:object[] = await PostModel.readPosts(user) || [];
    res.status(200).send(posts);
});

router.post('/', verifyToken, async (req:Request, res:Response) => {
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

router.put('/upvote', verifyToken, async (req:Request, res:Response) => {
    const post:string = req.body.post;
    const expert:string = req.body.expert;
    await PostModel.upvotePost(post, expert);
    res.status(200).send({
        "msg": "Success!"
    });
});

router.delete('/upvote', verifyToken, async (req:Request, res:Response) => {
    const post:string = req.body.post;
    const expert:string = req.body.expert;
    await PostModel.removePostUpvote(post, expert);
    res.status(200).send({
        "msg": "Success!"
    });
});

router.put('/downvote', verifyToken, async (req:Request, res:Response) => {
    const post:string = req.body.post;
    const expert:string = req.body.expert;
    await PostModel.downvotePost(post, expert);
    res.status(200).send({
        "msg": "Success!"
    });
});

router.delete('/downvote', verifyToken, async (req:Request, res:Response) => {
    const post:string = req.body.post;
    const expert:string = req.body.expert;
    await PostModel.removePostDownvote(post, expert);
    res.status(200).send({
        "msg": "Success!"
    });
});

router.get('/saved', verifyToken, async (req:Request, res:Response) => {
    const user:string = req.query.user?.toString() || "";
    const posts = await PostModel.readUserSavedPosts(user);
    res.status(200).send(posts);
});

router.put('/save', verifyToken, async (req:Request, res:Response) => {
    const post:string = req.body.post;
    const user:string = req.body.user;
    await PostModel.createSavedPost(user, post);
    res.status(200).send({
        "msg": "Success!"
    });
});

router.put('/unsave', verifyToken, async (req:Request, res:Response) => {
    const post:string = req.body.post;
    const user:string = req.body.user;
    await PostModel.deleteSavedPost(user, post);
    res.status(200).send({
        "msg": "Success!"
    });
});

export default router;