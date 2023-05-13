import express, { Express, Request, Response } from "express";
const port:Number = 8000;

const server: Express = express();

server.get("/", (req: Request, res: Response) => {
    res.status(200).send("MediHub is live!")
});

server.listen(port, () => {
    console.log(`🚀 Server listening on port ${port}`)
});
