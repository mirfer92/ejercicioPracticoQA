import credentials from '../credentials.json' with { type: "json" };
import payloads from '../payloads.json' with { type: "json" };

function getCredentials(userKey) {
    const userData = credentials.users[userKey];
    return { username: userData.username, password: userData.password};
}

function getPayload(key) {
    return payloads[key];
}

export { getCredentials, getPayload };