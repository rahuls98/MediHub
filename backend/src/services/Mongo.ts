import PangeaService from "./Pangea";
require('dotenv').config();

const getConnectionString = async () => {
    const vaultResponse = await PangeaService.vault.getItem(process.env.MONGO_DATABASE_CONN_STRING);
    return await vaultResponse.result.current_version.secret;
}

const MongoConfig = {
    getConnectionString
}

export default MongoConfig;