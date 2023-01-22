import { expect } from '@playwright/test';
import test from '@extensions/Base';
import { NavigateToSignin } from 'Navigations/NavigateToSignin';
test.beforeEach(async ({ page }) => {
  await page.goto('/')
});
test.afterEach(async ({ page }) => {
  await page.close()
});

test('Accept Cookie', async ({ cookiePageActions, loginPageActions, page }) => {
  await cookiePageActions.CookieDialogisVisible()
  await cookiePageActions.AcceptCookieDialog()
  await cookiePageActions.ValidateMainPage()
  const BookNowButton = page.getByRole('link', { name: 'Jetzt buchen' })
  await BookNowButton.click()
  await expect(page).toHaveURL(/.*sprechstunde-buchen*/)
  await loginPageActions.clickSubmitButton()
  await loginPageActions.enterLoginCredentials()
  await loginPageActions.clickSubmitButton()
  await expect(page).toHaveURL(/.*checkout*/)
});
