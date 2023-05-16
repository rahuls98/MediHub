import express, {Request, Response, Router} from "express"
import { PangeaErrors, AuthN } from "pangea-node-sdk";
import PangeaService from "../services/Pangea";

const router:Router = express.Router();

const getSampleUser = () => {
    const RANDOM_VALUE:string = new Date().getTime().toString();
    const EMAIL:string = `user.email+test${RANDOM_VALUE}@pangea.cloud`;
    const PASSWORD:string = "My1s+Password";
    const PROFILE = { name: "User name", country: "Argentina" };
    return {EMAIL, PASSWORD, PROFILE};
}

router.get('/signup', async (req:Request, res:Response) => {
    const sampleUser = getSampleUser();
    const authn = PangeaService.getAuthentication();
    try {
        await authn.user.create(
            sampleUser.EMAIL,
            sampleUser.PASSWORD,
            AuthN.IDProvider.PASSWORD,
            { profile: sampleUser.PROFILE }
        );
        res.status(200).send("Success!")
    } catch (err) {
        if (err instanceof PangeaErrors.APIError) {
            console.log(err);
        } else {
            throw err;
        }
    }
});

export default router;
