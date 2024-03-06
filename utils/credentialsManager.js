import credentials from '../data/credentials.json' with { type: "json" };

function getCredentials(userKey) {
    const userData = credentials.users[userKey];
    return { username: userData.username, password: userData.password};
}

export { getCredentials };