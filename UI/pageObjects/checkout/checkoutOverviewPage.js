import { By } from 'selenium-webdriver';
import { expect } from 'chai';

import { clickElement, getElementIndexByText } from '../../utils/driverManager.js';
import CheckoutCompletePage from './checkoutCompletePage.js';

class CheckoutOverviewPage {
    constructor() {
        this.cartItemLnk = By.css('div.inventory_item_name');
        this.finishBtn = By.css('button#finish');
    }

    async validateCheckoutItems(items) {
        for (const itemName of items) {
            const index = await getElementIndexByText(this.cartItemLnk, itemName);
            expect(index).to.not.be.equal(-1, `Item with name ${itemName} is not present in the Cart`);
        }
    }

    async finishCheckout() {
        await clickElement(this.finishBtn);
        return new CheckoutCompletePage();
    }
}

export default CheckoutOverviewPage;