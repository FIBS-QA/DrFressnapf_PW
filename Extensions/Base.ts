import { test as baseTest } from '@playwright/test';
import { CookiePageActions } from '@pages/CookiePageActions';
import { LoginPageActions } from '@pages/LoginPageActions';

const test = baseTest.extend<{
    cookiePageActions: CookiePageActions;
    loginPageActions: LoginPageActions;
}>({
    cookiePageActions: async ({ page }, use) => {
        await use(new CookiePageActions(page));
    },
    loginPageActions: async ({ page }, use) => {
        await use(new LoginPageActions(page));
    }
});

export default test;