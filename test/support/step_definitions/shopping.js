import { Given } from '@cucumber/cucumber';

import { navigateToSaucedemo } from '../../../utils/driverManager.js';

let pageObject;

Given('I navigate to saucedemo webpage', async function () {
    pageObject = await navigateToSaucedemo();
});

Given('I login with {string} and {string}', async function(username, password) {
    pageObject = await pageObject.loginWitCredtials(username, password);
    await pageObject.validateLoginSuccess();
});
