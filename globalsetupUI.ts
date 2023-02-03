import { LoginPageActions } from "@pages/LoginPageActions";
import { chromium, FullConfig } from "@playwright/test";
import { expect } from '@playwright/test';
import { CookiePageActions } from "@pages/CookiePageActions";
import { NavigationActions } from "@navigations/NavigationActions";

const ENV = process.env.ENV;
async function globalSetup(config: FullConfig) {
    const browser = await chromium.launch();
    const page = await browser.newPage();

    const { baseURL} = config.projects[0].use;
    await page.goto(baseURL);

    const loginPageActions = new LoginPageActions(page);
    const cookiePageActions = new CookiePageActions(page);
    const navigationActions = new NavigationActions(page);

    await cookiePageActions.CookieDialogisVisible()
    await cookiePageActions.AcceptCookieDialog()
    await navigationActions.clickBookNowButton()
    await navigationActions.clickSigninButton()
    await loginPageActions.enterValidLoginCredentials()
    await navigationActions.clickSigninButton()
    await expect(page).toHaveURL(/.*checkout*/)

    await page.context().storageState({ path: 'storageState.json' })
    await browser.close()
}
export default globalSetup;