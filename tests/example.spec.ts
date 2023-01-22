import { expect } from '@playwright/test';
import test from '@extensions/Base';
test.beforeEach(async ({ page }) => {
  await page.goto('/')
});
test.afterEach(async ({ page }) => {
  await page.close()
});

test('Accept Cookie', async ({ cookiePageActions }) => {
  await cookiePageActions.CookieDialogisVisible()
  await cookiePageActions.AcceptCookieDialog()
  // await expect(page).toHaveTitle(/Doktor/)
  // const BookNowButton = page.getByRole('link', { name: 'Jetzt buchen' })
  // await BookNowButton.click()
  // await expect(page).toHaveURL(/.*sprechstunde-buchen*/)
});
