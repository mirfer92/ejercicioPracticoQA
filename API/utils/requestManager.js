import axios from 'axios';

const PETSTORE_API_URL = 'https://petstore.swagger.io/v2';

const instance = axios.create({
    baseURL: PETSTORE_API_URL,
    timeout: 5000
});

async function sendRequest(
    url,
    method,
    data,
    params,
    headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }) {
        try {
            const config = {
                url,
                method,
                data,
                params,
                headers
            };
            const response = await instance.request(config);
            return { data: response.data, status: response.status};
        } catch (error) {
            console.error(`errorResponse: ${JSON.stringify(error.response.data)}`);
            return { data: error.response.data, status: error.response.status};
        }
    }

const methodsAllowed = {
    GET: 'get',
    POST: 'post',
    PUT: 'put'
};

function getRequestType(key) {
    if (methodsAllowed[key.toUpperCase()] === undefined) {
        throw new Error(`The method "${key}" is not allowed by the framework.`);
    }
    const func = async function (url, payload, params) {
        return (await sendRequest(url, methodsAllowed[key.toUpperCase()], payload, params));
    };
    return func;
}

export default getRequestType;