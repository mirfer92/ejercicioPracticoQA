import { By } from 'selenium-webdriver';
import { expect } from 'chai';

import { getText, waitUntilVisible } from '../utils/driverManager.js';

class InventoryPage {
    constructor() {
        this.headerTitle = By.css('span.title');
    }

    async validateLoginSuccess() {
        await waitUntilVisible(this.headerTitle);
        const titleText = await getText(this.headerTitle);
        expect(titleText).to.be.equal('Products');
    }
}

export default InventoryPage;