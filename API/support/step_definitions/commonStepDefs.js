import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from 'chai';

import getRequest from '../../utils/requestManager.js';
import { convertDataTableToObject, replaceObjectValuesFromObject, replaceStringByObjectValue } from '../../utils/commonUtils.js';

Given('I set the request payload as:', async function (data) {
    this.payload = convertDataTableToObject(data);
    replaceObjectValuesFromObject(this.payload, this);
});

When('I send a {string} request to {string} endpoint', async function(method, endpoint) {
    const request = getRequest(method);
    const response = await request(replaceStringByObjectValue(endpoint, this), {}, {});
    this.response = response;
    this.id = response.data?.id || this.id;
    this.payload = {};
});

When(
    'I send a {string} request to {string} endpoint with set payload',
    async function(method, endpoint) {
        const request = getRequest(method);
        const response = await request(replaceStringByObjectValue(endpoint, this), this.payload, {});
        this.response = response;
        this.id = response.data?.id || this.id;
        this.payload = {};
    }
);

When(
    'I send a {string} request to {string} endpoint with params:',
    async function(method, endpoint, params) {
        const paramsObject = convertDataTableToObject(params);
        replaceObjectValuesFromObject(paramsObject, this);
        const request = getRequest(method);
        const response = await request(replaceStringByObjectValue(endpoint, this), this.payload, paramsObject);
        this.response = response;
        this.id = response.data?.id || this.id;
        this.payload = {};
    }
);

Then('I validate response status code is {int}', async function (expectedStatus) {
    expect(this.response.status).to.be.equal(parseInt(expectedStatus));
});

Then('I validate response data as:', async function(expectedData) {
    const expectedDataObject = convertDataTableToObject(expectedData);
    replaceObjectValuesFromObject(expectedDataObject, this);
    expect(this.response.data).to.deep.equal(expectedDataObject);
});

Then('I validate response data array includes:', async function(expectedData) {
    const expectedDataObject = convertDataTableToObject(expectedData);
    replaceObjectValuesFromObject(expectedDataObject, this);
    if (Array.isArray(this.response.data)) {
        expect(this.response.data).to.deep.include(expectedDataObject);
    } else {
        throw new Error('To use this validation step the response data should be an array, please use another step');
    }
});