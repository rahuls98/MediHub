const {SecretManagerServiceClient} = require('@google-cloud/secret-manager').v1;
require('dotenv').config();

const getSecret = async (secretName:any) => {
    const client = new SecretManagerServiceClient();
    const [version] = await client.accessSecretVersion({
        name: secretName,
    });
    const secret = version.payload.data.toString();
    return secret;
}

export default {
    getSecret
}