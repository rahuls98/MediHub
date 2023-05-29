import express, { Express, Request, Response } from "express";
var cors = require('cors')
import mongoose from 'mongoose';
require('dotenv').config();
import authenticationRoutes from "./routes/authentication";
import vaultRoutes from "./routes/vault";
import MongoConfig from "./services/Mongo";
const PORT:Number = 8000;

import UserModel from "./models/User";

const server: Express = express();
mongoose.connect(MongoConfig.mongo.url)
.then(() => {
    console.log("💽 Database connected!");
})
.catch((err) => {
    console.log(err);
})

server.use(cors());
server.use(express.json());

server.use("/authentication", authenticationRoutes);
server.use("/vault", vaultRoutes)

server.get("/test", (req: Request, res: Response) => {
    UserModel.readUserSavedPosts("6473dbc099e4b2438e2bc699");
});

server.get("/", (req: Request, res: Response) => {
    res.status(200).send("MediHub is live!")
});

server.listen(PORT, () => {
    console.log(`🚀 Server listening on port ${PORT}`)
});
