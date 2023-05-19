require('dotenv').config();

const MongoConfig = {
    mongo: {
        url: process.env.MONGO_DATABASE_CONN_STRING || ""
    },
    server: {
        port: 1337
    }
}

export default MongoConfig;