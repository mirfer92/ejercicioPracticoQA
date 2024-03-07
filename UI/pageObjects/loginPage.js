import { By } from 'selenium-webdriver';
import { fillText, clickElement } from '../utils/driverManager.js';
import InventoryPage from './inventoryPage.js';

class LoginPage {
    constructor() {
        this.usernameIpt = By.css('input[data-test="username"]');
        this.passwordIpt = By.css('input[data-test="password"]');
        this.loginBtn = By.css('input[data-test="login-button"]');
    }

    async loginWitCredtials (username, password) {
        await fillText(this.usernameIpt, username);
        await fillText(this.passwordIpt, password);
        await clickElement(this.loginBtn);
        return new InventoryPage();
    }
}

export default LoginPage;