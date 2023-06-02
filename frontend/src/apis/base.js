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

const del = async (url, data) => {
    const options = {
        method: 'DELETE',
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

const put = async (url, data) => {
    const options = {
        method: 'PUT',
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
    post,
    del,
    put
}

export default requestMethods;