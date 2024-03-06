import { By } from 'selenium-webdriver';
import { expect } from 'chai';

import { clickElement, getElementIndexByText } from '../utils/driverManager.js';
import CheckoutRegisterPage from './checkout/checkoutRegisterPage.js';

class CartPage{
    constructor() {
        this.cartItemLnk = By.css('div.inventory_item_name');
        this.checkoutBtn = By.css('button#checkout');
    }

    async validateCartItems(itemsArray) {
        for (const itemName of itemsArray) {
            const index = await getElementIndexByText(this.cartItemLnk, itemName);
            expect(index).to.not.be.equal(-1,  `Item with name ${itemName} is not present in the Cart`);
        }
    }

    async startCheckout() {
        await clickElement(this.checkoutBtn);
        return new CheckoutRegisterPage();
    }
}

export default CartPage;