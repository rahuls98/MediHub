import express, {Request, Response, Router} from "express";

const router:Router = express.Router();

router.get('/hms', (req:Request, res:Response) => {
    res.status(200).send({
        'HMS_ROOM_ID': process.env.HMS_ROOM_ID,
        'HMS_TOKEN_ENDPOINT': process.env.HMS_TOKEN_ENDPOINT
    })
})

export default router;