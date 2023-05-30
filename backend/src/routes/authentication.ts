import express, {Request, Response, Router} from "express"
import { PangeaErrors, AuthN } from "pangea-node-sdk";
import PangeaService from "../services/Pangea";

const router:Router = express.Router();

router.post('/signup', async (req:Request, res:Response) => {
    const authn = PangeaService.getAuthentication();
    try {
        const response = await authn.user.create(
            req.body.username,
            req.body.password,
            AuthN.IDProvider.PASSWORD,
            { 
                profile: {
                    fullname: req.body.fullname,
                    role: 'User'
                }   
            }
        );
        res.status(200).send(response.result);
    } catch (err:any) {
        if (err instanceof PangeaErrors.APIError) {
            console.log(err);
            res.status(400).send(err.summary)
        } else {
            console.log(err);
            res.status(500).send("Server error!");
        }
    }
});

router.post('/signin', async (req:Request, res:Response) => {
    const authn = PangeaService.getAuthentication();
    try {
        const response = await authn.user.login.password(
            req.body.username,
            req.body.password,
        );
        res.status(200).send(response.result);
    } catch (err:any) {
        if (err instanceof PangeaErrors.APIError) {
            console.log(err);
            res.status(400).send(err.summary)
        } else {
            console.log(err);
            res.status(500).send("Server error!");
        }
    }
});

router.post('/logout', async (req:Request, res:Response) => {});

export default router;
