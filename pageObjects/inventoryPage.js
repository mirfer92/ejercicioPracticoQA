import { By } from 'selenium-webdriver';
import { expect } from 'chai';

import {
    getText,
    waitUntilVisible,
    getElementIndexByText,
    clickElementByIndex,
    clickElement
} from '../utils/driverManager.js';
import CartPage from './cartPage.js';

class InventoryPage {
    constructor() {
        this.headerTitle = By.css('span.title');
        this.inventoryCtr = By.id('inventory_container');
        this.inventoryItem = By.css('div.inventory_item_label a > div.inventory_item_name');
        this.addToCartBtn = By.css('div.pricebar button.btn_inventory'); // Try to improve using xpath
        this.shoppingCartLnk = By.css('a.shopping_cart_link');
    }

    async validateLoginSuccess() {
        await waitUntilVisible(this.headerTitle);
        const titleText = await getText(this.headerTitle);
        expect(titleText).to.be.equal('Products');
        await waitUntilVisible(this.inventoryCtr);
    }

    async addItemToCart(item) {
        const itemIndex = await getElementIndexByText(this.inventoryItem, item);
        await clickElementByIndex(this.addToCartBtn, itemIndex);
    }

    async openCartDetails() {
        await clickElement(this.shoppingCartLnk);
        return new CartPage();
    }
}

export default InventoryPage;