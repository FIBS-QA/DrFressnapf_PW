import test from '@extensions/Base';

test(`@Accept Cookies`, async ({ cookiePageActions }) => {

  await test.step(`Open browser`, async () => {
    await cookiePageActions.navigateToURL()
  });
  await test.step(`Wait until the cookie dialog be visible`, async () => {
    await cookiePageActions.CookieDialogisVisible()
  });
  await test.step(`Click on Accept Cookies Button`, async () => {
    await cookiePageActions.AcceptCookieDialog()
  });
  await test.step(`Click on Accept Cookies Button`, async () => {
    await cookiePageActions.ValidateMainPage()
  });
});