import { 
    PangeaConfig,
    AuthNService,
    RedactService,
    VaultService
 } from "pangea-node-sdk";
require('dotenv').config();

const domain = process.env.PANGEA_DOMAIN;
const config = new PangeaConfig({ domain });

const getVault = () => {
    const token = process.env.PANGEA_VAULT_TOKEN;
    return new VaultService(token, config);
}

const vault = getVault();

const getAuthentication = async () => {
    const vaultResponse = await vault.getItem(process.env.PANGEA_AUTHN_TOKEN);
    const PANGEA_AUTHN_TOKEN = vaultResponse.result.current_version.secret;
    return new AuthNService(PANGEA_AUTHN_TOKEN, config);
}

const getRedact = async () => {
    const vaultResponse = await vault.getItem(process.env.PANGEA_REDACT_TOKEN);
    const PANGEA_REDACT_TOKEN = vaultResponse.result.current_version.secret;
    const redactService = new RedactService(PANGEA_REDACT_TOKEN, config);
    return redactService; 
}

export default {
    getAuthentication,
    getRedact,
    vault
}
