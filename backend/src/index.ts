import express, { Express, Request, Response } from "express";
var cors = require('cors')
import mongoose from 'mongoose';
require('dotenv').config();
import authenticationRoutes from "./routes/authentication";
import vaultRoutes from "./routes/vault";
import feedRoutes from "./routes/feed";
import followingRoutes from "./routes/following";
import expertRoutes from "./routes/expert";
import topicRoutes from "./routes/topic";
import postRoutes from "./routes/post";
import sessionRoutes from "./routes/session";

import MongoConfig from "./services/Mongo";
const PORT:Number = 8000;

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
server.use("/vault", vaultRoutes);
server.use("/feed", feedRoutes);
server.use("/following", followingRoutes);
server.use("/expert", expertRoutes);
server.use("/topic", topicRoutes);
server.use("/post", postRoutes);
server.use("/session", sessionRoutes);

server.get("/", (req: Request, res: Response) => {
    res.status(200).send("MediHub is live!")
});

server.listen(PORT, () => {
    console.log(`🚀 Server listening on port ${PORT}`)
});
