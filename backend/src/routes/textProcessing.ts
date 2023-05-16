import express, {Request, Response, Router} from "express";
import PangeaService from "../services/Pangea";
const axios = require('axios');

const router:Router = express.Router();

router.get('/redact', async (req:Request, res:Response) => {
    const redact = PangeaService.getReadact();
    const text = "Hello, my email is rahs98@gmail.com.";
    console.log("Redacting PII from: '%s'", text);
    const response = await redact.redact(text);
    if (response.success) {
      console.log("Response:", response.result);
    } else {
      console.log("Error", response.code, response.result);
    }
});

router.get('/sentiment-analysis', async (req:Request, res:Response) => {
    const text = "I think this method is absolute trash!";
    const API_TOKEN = process.env.HUGGINGFACE_STA_TOKEN;
    const url = 'https://api-inference.huggingface.co/models/finiteautomata/bertweet-base-sentiment-analysis';
    const headers = {
        Authorization: `Bearer ${API_TOKEN}`,
    };

    axios.post(url, { text }, { headers })
    .then((response: any) => {
        const result = response.data;
        console.log(result);
    })
    .catch((error: any) => {
        console.error(error);
    });   
})

export default router;