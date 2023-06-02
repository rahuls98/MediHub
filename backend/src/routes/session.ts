import express, {Request, Response, Router} from "express";
import SessionModel from "../models/Session";

const router:Router = express.Router();

router.get('/', async (req:Request, res:Response) => {
    const user:string = req.query.user?.toString() || "";
    const sessions:object[] = await SessionModel.readSessions(user) || [];
    res.status(200).send(sessions);
});

router.post('/', async (req:Request, res:Response) => {
    const author = req.body.author;
    const title = req.body.title;
    const description = req.body.description;
    const date = req.body.date;
    const time = req.body.time;
    const topics = req.body.topics;
    await SessionModel.createSession(author, title, description, date, time, topics);
    res.status(201).send({
        "msg": "Success!"
    });
});

router.put('/enroll', async (req:Request, res:Response) => {
    const session:string = req.body.session;
    const user:string = req.body.user;
    await SessionModel.addEnrollment(session, user);
    res.status(200).send({
        "msg": "Success!"
    });
});

router.put('/unenroll', async (req:Request, res:Response) => {
    const session:string = req.body.session;
    const user:string = req.body.user;
    await SessionModel.deleteEnrollment(session, user);
    res.status(200).send({
        "msg": "Success!"
    });
});

router.get('/enrolled', async (req:Request, res:Response) => {
    const user:string = req.query.user?.toString() || "";
    const enrolledSessions = await SessionModel.readSessionsByUser(user);
    res.status(200).send(enrolledSessions);
});

router.put('/:id', async (req:Request, res:Response) => {});

router.delete('/:id', async (req:Request, res:Response) => {});

export default router;