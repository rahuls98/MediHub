const {SecretManagerServiceClient} = require('@google-cloud/secret-manager').v1;
require('dotenv').config();

const getSecret = async (secretName:any) => {
    const client = new SecretManagerServiceClient();
    const [version] = await client.accessSecretVersion({
        name: secretName,
    });
    const responsePayload = version.payload.data.toString();
    let secret = JSON.parse(responsePayload);
    return secret;
}

export default {
    getSecret
}