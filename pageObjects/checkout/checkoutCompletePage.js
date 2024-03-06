import { By } from "selenium-webdriver";
import { expect } from "chai";

import { getText } from '../../utils/driverManager.js';

const CONFIRMATION_MESSAGE = 'Thank you for your order!';
const CONFIRMATION_TEXT = 'Your order has been dispatched, and will arrive just as fast as the pony can get there!';
const BUTTON_TEXT = 'Back Home';

class CheckoutCompletePage {
    constructor() {
        this.confirmationTitle = By.css('h2.complete-header');
        this.confirmationText = By.css('div.complete-text');
        this.backHomeBtn = By.css('button[data-test="back-to-products"]');
    }

    async validateShoppingComplete() {
        const confirmationTitle = await getText(this.confirmationTitle);
        expect(confirmationTitle).to.be.equal(CONFIRMATION_MESSAGE);
        const confirmationText = await getText(this.confirmationText);
        expect(confirmationText).to.be.equal(CONFIRMATION_TEXT);
        const backHomeBtnText = await getText(this.backHomeBtn);
        expect(backHomeBtnText).to.be.equal(BUTTON_TEXT);
    }
}

export default CheckoutCompletePage;