import express, { Express, Request, Response } from "express";
var cors = require('cors')
require('dotenv').config();
import authenticationRoutes from "./routes/authentication";
import vaultRoutes from "./routes/vault";
const PORT:Number = 8000;

const server: Express = express();
server.use(cors());

server.use("/authentication", authenticationRoutes);
server.use("/vault", vaultRoutes)

server.get("/", (req: Request, res: Response) => {
    res.status(200).send("MediHub is live!")
});

server.listen(PORT, () => {
    console.log(`🚀 Server listening on port ${PORT}`)
});
