import { test as baseTest } from '@playwright/test';
import { CookiePageActions } from '@pages/CookiePageActions';
import { LoginPageActions } from '@pages/LoginPageActions';
import { NavigationActions } from '@navigations/NavigationActions';

const test = baseTest.extend<{
    cookiePageActions: CookiePageActions;
    loginPageActions: LoginPageActions;
    navigationActions: NavigationActions;
}>({
    cookiePageActions: async ({ page }, use) => {
        await use(new CookiePageActions(page));
    },
    loginPageActions: async ({ page }, use) => {
        await use(new LoginPageActions(page));
    },
    navigationActions: async ({ page }, use) => {
        await use(new NavigationActions(page));
    }
});

export default test;