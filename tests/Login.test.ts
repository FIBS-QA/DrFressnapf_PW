import { expect } from '@playwright/test';
import test from '@extensions/Base';

test(`@Navigate to Login form an login`, async ({
    cookiePageActions,
    loginPageActions,
    navigationActions,
    page }) => {
    await test.step(`Open browser`, async () => {
        await cookiePageActions.navigateToURL()
    });
    await test.step(`Wait until the cookie dialog be visible`, async () => {
        await cookiePageActions.CookieDialogisVisible()
    });
    await test.step(`Click on Accept Cookies Button`, async () => {
        await cookiePageActions.AcceptCookieDialog()
    });
    await test.step(`Click on Book now button`, async () => {
        await navigationActions.clickBookNowButton()
    });
    await test.step(`Click on Sign in button`, async () => {
        await navigationActions.clickSigninButton()
    });
    await test.step(`Attempt login with blank credentials`, async () => {
        await navigationActions.clickSigninButton()
    });
    await test.step(`Click on Sign in button`, async () => {
        await loginPageActions.enterInvalidLoginCredentials()
    });
    await test.step(`Attempt login with blank credentials`, async () => {
        await navigationActions.clickSigninButton()
    });
    await test.step(`Fill in username and password fields`, async () => {
        await loginPageActions.enterValidLoginCredentials()
    });
    await test.step(`Click on Sign in button`, async () => {
        await navigationActions.clickSigninButton()
    });
    await test.step(`Validate the URL after login`, async () => {
        await expect(page).toHaveURL(/.*checkout*/)
    });
});
