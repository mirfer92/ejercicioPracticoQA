import axios from 'axios';

const PETSTORE_API_URL = 'https://petstore.swagger.io/v2';
const GET_METHOD = 'get';
const POST_METHOD = 'post';
const PUT_METHOD = 'put';

const instance = axios.create({
    baseURL: PETSTORE_API_URL,
    timeout: 5000
});

async function sendRequest(url, method, data = {}, params = {}) {
    try {
        const config = {
            url,
            method,
            data,
            params,
        };
        const response = await instance.request(config);
        return { data: response.data, status: response.status};
    } catch (error) {
        console.error(error);
    }
}

async function get(url, params) {
    return await sendRequest(url, GET_METHOD, {}, params);
}

async function post(url, data) {
    return await sendRequest(url, POST_METHOD, data);
}

async function put(url, data) {
    return await sendRequest(url, PUT_METHOD, data);
}

function selectFunction(key) {
    const methodsAllowed = {
        GET: get,
        POST: post,
        PUT: put
    };
    if (methodsAllowed[key.toUpperCase()] === undefined) {
        throw new Error(`The method "${key}" is not allowed by the framework yet.`);
    }
    return methodsAllowed[key.toUpperCase()];
}

export {
    selectFunction
};