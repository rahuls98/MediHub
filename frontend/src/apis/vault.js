import requestMethods from "./base";

const getHmsAuth = async () => {
    return await requestMethods.get('/vault/hms');
}

const vaultApis = {
    getHmsAuth
};

export default vaultApis;