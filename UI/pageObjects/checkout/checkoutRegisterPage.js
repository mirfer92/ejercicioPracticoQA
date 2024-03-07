import { By } from 'selenium-webdriver';

import { clickElement, fillText } from '../../utils/driverManager.js';
import CheckoutOverviewPage from './checkoutOverviewPage.js';

class CheckoutRegisterPage {
    constructor() {
        this.firstNameIpt = By.css('input[data-test="firstName"]');
        this.lastNameIpt = By.css('input[data-test="lastName"]');
        this.postalCodeIpt = By.css('input[data-test="postalCode"]');
        this.continueBtn = By.css('input[data-test="continue"]');
    }

    async registerCheckout(data) {
        await fillText(this.firstNameIpt, data.firstName);
        await fillText(this.lastNameIpt, data.lastName);
        await fillText(this.postalCodeIpt, data.postalCode);
        await clickElement(this.continueBtn);
        return new CheckoutOverviewPage();
    }
}

export default CheckoutRegisterPage;