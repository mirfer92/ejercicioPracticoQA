import { When } from '@cucumber/cucumber';
import { selectFunction } from '../../utils/requestManager.js';

When('I send a {string} request to {string} endpoint', async function(method, endpoint) {
    const selectedFunction = selectFunction(method);
    const response = await selectedFunction(endpoint, {});
    this.response = response;
    console.log(this.response);
});