import GcpSecretManager from "./GcpSecretManager";
import {
    PangeaConfig,
    AuthNService,
    RedactService,
    VaultService,
} from "pangea-node-sdk";
require("dotenv").config();

const domain = process.env.PANGEA_DOMAIN;
const config = new PangeaConfig({ domain });

const getVault = () => {
    const token = process.env.PANGEA_VAULT_TOKEN;
    return new VaultService(token, config);
};

const vault = getVault();

const getAuthentication = async () => {
    const PANGEA_AUTHN_TOKEN = await GcpSecretManager.getSecret(
        process.env.PANGEA_AUTHN_TOKEN
    );
    return new AuthNService(PANGEA_AUTHN_TOKEN, config);
};

const getRedact = async () => {
    const PANGEA_REDACT_TOKEN = await GcpSecretManager.getSecret(
        process.env.PANGEA_REDACT_TOKEN
    );
    const redactService = new RedactService(PANGEA_REDACT_TOKEN, config);
    return redactService;
};

const getVaultSecret = async (secretId: string) => {
    const vaultResponse = await vault.getItem(secretId);
    const secret = vaultResponse.result.current_version.secret;
    return secret;
};

export default {
    getAuthentication,
    getRedact,
    vault,
    getVaultSecret,
};
