// import PangeaService from "./Pangea";
import GcpSecretManagerService from "./GcpSecretManager";
require("dotenv").config();

const getConnectionString = async () => {
    return GcpSecretManagerService.getSecret(
        process.env.MONGO_DATABASE_CONN_STRING
    );
};

const MongoConfig = {
    getConnectionString,
};

export default MongoConfig;
