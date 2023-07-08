// import PangeaService from "./Pangea";
import GcpSecretManagerService from "./GcpSecretManager";
require('dotenv').config();

const getConnectionString = async () => {
    // const vaultResponse = await PangeaService.vault.getItem(process.env.MONGO_DATABASE_CONN_STRING);
    // return await vaultResponse.result.current_version.secret;
    return GcpSecretManagerService.getSecret(process.env.MONGO_DATABASE_CONN_STRING);
}

const MongoConfig = {
    getConnectionString
}

export default MongoConfig;