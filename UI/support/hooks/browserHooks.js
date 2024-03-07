import { Before, After } from '@cucumber/cucumber';

import { initializeBrowser, closeBrowser } from '../../utils/driverManager.js';

Before({tags: '@UI'}, async function() {
    await initializeBrowser();
});

After({tags: '@UI'}, async function() {
    await closeBrowser();
});
