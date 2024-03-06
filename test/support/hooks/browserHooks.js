import { After } from '@cucumber/cucumber';

import { closeBrowser } from '../../../utils/driverManager.js';

After(async function(){
    await closeBrowser();
});
