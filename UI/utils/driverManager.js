import { Builder, Capabilities, until } from 'selenium-webdriver';
import LoginPage from '../pageObjects/loginPage.js';

let driver;


const SAUCEDEMO_URL = 'https://www.saucedemo.com/';

const initializeBrowser = async function() {
    const capabilities = Capabilities.chrome();
    capabilities.set('chromeOptions', { 'w3c': false });
    driver = new Builder().withCapabilities(capabilities).build();
    driver.manage().window().maximize();
};

const closeBrowser = async function () {
    await driver.quit();
};

const navigateToSaucedemo = async function() {
    await driver.get(SAUCEDEMO_URL);
    return new LoginPage();
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

const getElementIndexByText = async function(locator, text) {
    const elementsArray = await driver.findElements(locator);
    for (let index = 0; index < elementsArray.length; index++) {
        const elementText = await elementsArray[index].getText();
        if(elementText.includes(text)) return index;
    }
    return -1;
};

const clickElementByIndex = async function(locator, index) {
    const elementsArray = await driver.findElements(locator);
    await elementsArray[index].click();
};

const waitUntilVisible = async function(locator, timeout = 1000) {
    const element = await driver.findElement(locator);
    await driver.wait(await until.elementIsVisible(element), timeout);
};

export {
    initializeBrowser,
    closeBrowser,
    navigateToSaucedemo,
    fillText,
    clickElement,
    getText,
    getElementIndexByText,
    clickElementByIndex,
    waitUntilVisible
};
