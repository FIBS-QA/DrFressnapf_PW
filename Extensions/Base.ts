import { test as baseTest } from '@playwright/test';
import { CookiePageActions } from '@pages/CookiePageActions';

const test = baseTest.extend<{
    cookiePageActions: CookiePageActions;
}>({
    cookiePageActions: async ({ page }, use) => {
        await use(new CookiePageActions(page));
    }
});

export default test;