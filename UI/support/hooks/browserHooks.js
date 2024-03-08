import { Before, After } from '@cucumber/cucumber';

import { initializeBrowser, closeBrowser } from '../../utils/driverManager.js';
import { getBrowser } from '../../../data/utils/dataReader.js';

Before({tags: '@UI'}, async function() {
    if (!getBrowser()) console.warn('The browser was not set at "data/config.json" file; running tests in Chrome by default.');
    await initializeBrowser(getBrowser());
});

After({tags: '@UI'}, async function() {
    await closeBrowser();
});
