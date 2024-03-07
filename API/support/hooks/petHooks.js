import { Before } from '@cucumber/cucumber';
import { getPayload } from '../../../data/utils/dataReader.js';
import getRequest from '../../utils/requestManager.js';

Before({ tags: '@createPet'}, async function() {
    const payload = getPayload('pet');
    const request = getRequest('post');
    const response = await request('/pet', payload, {});
    this.id = response.data?.id;
});
