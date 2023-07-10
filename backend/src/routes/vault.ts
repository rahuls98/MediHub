import express, { Request, Response, Router } from "express";
import GcpSecretManager from "../services/GcpSecretManager";
import { verifyToken } from "../middleware/authorization";

const router: Router = express.Router();

router.get("/hms", verifyToken, async (req: Request, res: Response) => {
    const HMS_ROOM_ID_VAULT_ID = process.env.HMS_ROOM_ID || "";
    const HMS_ROOM_ID = await GcpSecretManager.getSecret(HMS_ROOM_ID_VAULT_ID);
    res.status(200).send({
        HMS_ROOM_ID: HMS_ROOM_ID,
        HMS_TOKEN_ENDPOINT: process.env.HMS_TOKEN_ENDPOINT,
    });
});

export default router;
