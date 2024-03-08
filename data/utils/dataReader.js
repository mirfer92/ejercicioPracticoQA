import config from '../config.json' with { type: "json" };
import payloads from '../payloads.json' with { type: "json" };

function getCredentials(userKey) {
    const userData = config.users[userKey];
    return { username: userData.username, password: userData.password};
}

function getPayload(key) {
    return payloads[key];
}

function getBrowser() {
    return config.browser !== '' ? config.browser : undefined;
}

export { getCredentials, getPayload, getBrowser };