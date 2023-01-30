import { APIActions } from '@extensions/APIActions';
import { test } from '@playwright/test';

const apiActions = new APIActions();

test(`@API GET main page`, async ({ request }) => {
    const response = await request.get(`api/sprechstunde-buchen/`);
    await apiActions.verifyStatusCode(response);
});