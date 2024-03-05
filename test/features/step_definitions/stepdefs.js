import { Given, When, Then, AfterAll } from '@cucumber/cucumber';
import { Builder, By, Capabilities, Key, until } from'selenium-webdriver';
import { expect } from 'chai';

// driver setup
const capabilities = Capabilities.chrome();
capabilities.set('chromeOptions', { 'w3c': false });
const driver = new Builder().withCapabilities(capabilities).build();

Given('I navigate to saucedemo webpage', async function () {
    await driver.get('https://www.saucedemo.com/');
});

Given('I login with {string} and {string}', async function(username, password) {
    const usernameIpt = await driver.findElement(By.css('input[data-test="username"]'));
    await usernameIpt.sendKeys(username);
    const passwordIpt = await driver.findElement(By.css('input[data-test="password"]'));
    await passwordIpt.sendKeys(password);
    const loginBtn = await driver.findElement(By.css('input[data-test="login-button"]'));
    await loginBtn.click();

    const titleText = await driver.findElement(By.css('span.title')).getText();
    expect(titleText).to.be.equal('Products');
});

When('I search for text {string}', async function (text) {
    await driver.findElement(By.name('q')).sendKeys(text, Key.RETURN);
});
  
Then('I see google could find {string}', async function (expected) {
    await driver.wait(until.titleIs(expected), 1000);
});

AfterAll(async function(){
    await driver.quit();
});