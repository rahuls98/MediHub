const BASE_URL = "http://localhost:8000"

const get = async (url) => {
    try {
        const response = await fetch(BASE_URL + url);
        return response.json();
    } catch (err) {
        console.log(err);
    }
}

const post = async (url, data) => {
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    };
    try {
        const response = await fetch(BASE_URL + url, options);
        return response.json();
    } catch (err) {
        console.log(err);
    }
}

const requestMethods = {
    get,
    post
}

export default requestMethods;