import { expect } from '@playwright/test';
import test from '@extensions/Base';

test.beforeEach(async ({ page }) => {
    await page.goto('/sprechstunde-buchen/#/login')
});
test.afterEach(async ({ page }) => {
    await page.close()
});

test(`@Navigate to Login form an login`, async ({
    cookiePageActions,
    loginPageActions,
    navigationActions,
    page }) => {
    await test.step(`Wait until the cookie dialog be visible`, async () => {
        await cookiePageActions.CookieDialogisVisible()
    });
    await test.step(`Click on Accept Cookies Button`, async () => {
        await cookiePageActions.AcceptCookieDialog()
    });
    await test.step(`Fill in username and password fields`, async () => {
        await loginPageActions.enterLoginCredentials()
    });
    await test.step(`Click on Sign in button`, async () => {
        await navigationActions.clickSigninButton()
    });
    await test.step(`Validate the URL after login`, async () => {
        await expect(page).toHaveURL(/.*checkout*/)
    });
});
