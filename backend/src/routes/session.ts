import express, {Request, Response, Router} from "express";

const router:Router = express.Router();

router.get('/', async (req:Request, res:Response) => {});

router.post('/', async (req:Request, res:Response) => {});

router.put('/:id', async (req:Request, res:Response) => {});

router.delete('/:id', async (req:Request, res:Response) => {});

router.put('/enroll', async (req:Request, res:Response) => {});

router.put('/unenroll', async (req:Request, res:Response) => {});

router.put('/save', async (req:Request, res:Response) => {});

export default router;