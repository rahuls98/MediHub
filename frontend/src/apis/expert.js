import requestMethods from "./base";

const getAllExperts = async () => {
    return await requestMethods.get('/expert');
}

const expertApis = {
    getAllExperts
}

export default expertApis;