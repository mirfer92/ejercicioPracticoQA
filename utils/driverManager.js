import { Builder, Capabilities, until } from 'selenium-webdriver';
import LoginPage from '../pageObjects/loginPage.js';

const capabilities = Capabilities.chrome();
capabilities.set('chromeOptions', { 'w3c': false });
const driver = new Builder().withCapabilities(capabilities).build();
driver.manage().window().maximize();

const SAUCEDEMO_URL = 'https://www.saucedemo.com/';

const navigateToSaucedemo = async function() {
    await driver.get(SAUCEDEMO_URL);
    return new LoginPage();
};

const closeBrowser = async function () {
    await driver.quit();
};

const fillText = async function (locator, text) {
    await driver.findElement(locator).sendKeys(text);
};

const clickElement = async function (locator) {
    await driver.findElement(locator).click();
};

const getText = async function (locator) {
    return driver.findElement(locator).getText();
};

const waitUntilVisible = async function(locator, timeout = 1000) {
    const element = await driver.findElement(locator);
    await driver.wait(await until.elementIsVisible(element), timeout);
};

export {
    navigateToSaucedemo,
    closeBrowser,
    fillText,
    clickElement,
    getText,
    waitUntilVisible
};
