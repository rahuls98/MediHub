import express, {Request, Response, Router} from "express"
import { PangeaErrors, AuthN } from "pangea-node-sdk";
import ExpertModel from "../models/Expert";
import UserModel from "../models/User";
import PangeaService from "../services/Pangea";

const router:Router = express.Router();

router.post('/signup', async (req:Request, res:Response) => {
    const authn = await PangeaService.getAuthentication();
    const isUser = (req.body.role === "User")
    try {
        const response = await authn.user.create(
            req.body.email,
            req.body.password,
            AuthN.IDProvider.PASSWORD,
            { 
                verified: isUser,
                profile: {
                    fullname: req.body.fullname,
                    role: req.body.role
                }   
            }
        );
        if (isUser) {
            UserModel.createUser(
                response.result.id,
                req.body.email,
                req.body.fullname,
                []
            );
        } else {
            ExpertModel.createExpert(
                req.body.fullname,
                req.body.email,
                response.result.id,
                []
            )
        }
        res.status(200).send({success: true, ...response.result});
    } catch (err:any) {
        if (err instanceof PangeaErrors.APIError) {
            if (err.errors.length > 0) {
                res.status(400).send({
                    success: false,
                    message: err.errors[0].detail
                })
            } else {
                res.status(400).send({
                    success: false,
                    message: err.response.summary
                })
            }
        } else {
            console.log(err);
            res.status(500).send("Server error!");
        }
    }
});

router.post('/signin', async (req:Request, res:Response) => {
    const authn = await PangeaService.getAuthentication();
    try {
        const response = await authn.user.login.password(
            req.body.email,
            req.body.password,
        );
        let user;
        let isVerified = true;
        if (response.result.active_token.profile.role === "User") {
            user = await UserModel.readByPangeaId(response.result.active_token.identity);
        } else {
            user = await ExpertModel.readByPangeaId(response.result.active_token.identity);
            const profile = await authn.user.profile.getProfile({email: req.body.email});
            isVerified = profile.result.verified;
        }
        res.status(200).send({
            success: true,
            ...response.result,
            user,
            isVerified
        });
    } catch (err:any) {
        if (err instanceof PangeaErrors.APIError) {
            if (err.errors.length > 0) {
                res.status(400).send({
                    success: false,
                    message: err.errors[0].detail
                })
            } else {
                res.status(400).send({
                    success: false,
                    message: err.response.summary
                })
            }
        } else {
            console.log(err);
            res.status(500).send("Server error!");
        }
    }
});

// router.post('/logout', async (req:Request, res:Response) => {});

export default router;
