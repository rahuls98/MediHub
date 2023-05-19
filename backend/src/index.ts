import express, { Express, Request, Response } from "express";
var cors = require('cors')
import mongoose from 'mongoose';
require('dotenv').config();
import authenticationRoutes from "./routes/authentication";
import textProcessingRoutes from "./routes/textProcessing";
import vaultRoutes from "./routes/vault";
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
server.use("/text-processing", textProcessingRoutes);
server.use("/vault", vaultRoutes)

server.get("/", (req: Request, res: Response) => {
    res.status(200).send("MediHub is live!")
});

server.listen(PORT, () => {
    console.log(`🚀 Server listening on port ${PORT}`)
});
