import { 
    PangeaConfig,
    AuthNService,
    RedactService
 } from "pangea-node-sdk";
require('dotenv').config();

const domain = process.env.PANGEA_DOMAIN;
const config = new PangeaConfig({ domain });

const getAuthentication = () => {
    const token = process.env.PANGEA_AUTHN_TOKEN;
    return new AuthNService(token, config);
}

const getReadact = () => {
    const token = process.env.PANGEA_REDACT_TOKEN;
    return new RedactService(token, config);
}

export default {
    getAuthentication,
    getReadact
}
