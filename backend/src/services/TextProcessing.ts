import PangeaService from "./Pangea";
const axios = require('axios');
const HUGGINGFACE_API_TOKEN = process.env.HUGGINGFACE_API_TOKEN;

const redact = async (text:string) => {
    const redact = PangeaService.getReadact();
    const response = await redact.redact(text);
    if (response.success) {
        // console.log("Response:", response.result);
        return response.result;
    } else {
        console.log("Error", response.code, response.result);
    }
}

const sentimentAnalysis = async () => {
    const text = "I think this method is absolute trash!";
    const URL = 'https://api-inference.huggingface.co/models/finiteautomata/bertweet-base-sentiment-analysis';
    const headers = {
        Authorization: `Bearer ${HUGGINGFACE_API_TOKEN}`,
    };
    axios.post(URL, { text }, { headers })
    .then((response: any) => {
        const result = response.data;
        console.log(result);
    })
    .catch((error: any) => {
        console.error(error);
    });   
}

const keywordExtraction = async () => {
    const text = "COVID-19, also known as the novel coronavirus, has had a profound global impact since its emergence in late 2019. This infectious disease, caused by the severe acute respiratory syndrome coronavirus 2 (SARS-CoV-2), has spread rapidly across continents, leading to a pandemic. COVID-19 has presented unprecedented challenges to healthcare systems, economies, and societies worldwide. It has disrupted daily routines, restricted travel, and prompted widespread implementation of public health measures such as social distancing, mask-wearing, and hand hygiene."
    const URL = "https://api-inference.huggingface.co/models/yanekyuk/bert-keyword-extractor";
    const headers = {
        Authorization: `Bearer ${HUGGINGFACE_API_TOKEN}`,
    };
    axios.post(URL, JSON.stringify(text), { headers })
    .then((response: any) => {
        const result = response.data;
        console.log(result);
    })
    .catch((error: any) => {
        console.error(error);
    });
}

export default {
    redact,
    sentimentAnalysis,
    keywordExtraction
}
