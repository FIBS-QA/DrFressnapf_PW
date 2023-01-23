import { Locator, Page } from "@playwright/test";

export class CookiePageObjects {
    readonly page: Page;
    readonly AcceptCookieButton: Locator;
    readonly CookieDialog: Locator;
    readonly MainPage: Locator;
  
    constructor(page: Page) {
      this.page = page;
      this.AcceptCookieButton = page.getByRole('button', { name: 'Ok' });
      this.CookieDialog = page.getByRole("dialog");
      this.MainPage = page.getByTitle(/Doktor/);
    }
}