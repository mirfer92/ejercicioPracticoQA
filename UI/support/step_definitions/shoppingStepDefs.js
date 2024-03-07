import { Given, When, Then } from '@cucumber/cucumber';

import { navigateToSaucedemo } from '../../utils/driverManager.js';
import { getCredentials } from '../../../data/utils/dataReader.js';

let pageObject;

Given('I navigate to saucedemo webpage', async function () {
    pageObject = await navigateToSaucedemo();
});

Given('I login as {string} user', async function(userKey) {
    const credentials = getCredentials(userKey);
    pageObject = await pageObject.loginWitCredtials(credentials.username, credentials.password);
    await pageObject.validateLoginSuccess();
    this.cartItems = [];
});

When('I add a {string} item to the cart', async function(item) {
    await pageObject.addItemToCart(item);
    this.cartItems.push(item);
});

Then('I validate the selected cart items', async function () {
    pageObject = await pageObject.openCartDetails();
    await pageObject.validateCartItems(this.cartItems);
});

When('I make the checkout with data:', async function (data) {
    pageObject = await pageObject.startCheckout();
    const dataObject = {};
    data.rawTable.forEach((entry) => {
        dataObject[entry[0]] = entry[1];
    });
    pageObject = await pageObject.registerCheckout(dataObject);
});

Then('I validate items checked out:', async function (items) {
    const itemsArray = items.rawTable.map((item) => item[0]);
    await pageObject.validateCheckoutItems(itemsArray);
});

When('I finish the shopping checkout', async function () {
    pageObject = await pageObject.finishCheckout();
});

Then('I validate the successful shopping confirmation', async function() {
    await pageObject.validateShoppingComplete();
});