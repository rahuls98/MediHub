import { Request, Response, NextFunction } from "express";
import { PangeaErrors } from "pangea-node-sdk";
import PangeaService from "../services/Pangea";

export const verifyToken = async (req:Request, res:Response, next:NextFunction) => {
    const authn = await PangeaService.getAuthentication();
    try {
        const token = req.header("authorization");
        if (!token) {
            res.status(400).send("Unauthorized!");
            return;
        }
        const response = await authn.client.clientToken.check(token);
        next();
    } catch (err:any) {
        if (err instanceof PangeaErrors.APIError) {
            console.log(err);
            res.status(400).send(err.summary)
        } else {
            console.log(err);
            res.status(500).send("Server error!");
        }
    }
}
