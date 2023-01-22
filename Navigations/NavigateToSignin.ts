import { expect, Locator, Page } from "@playwright/test";

export class NavigateToSignin {
    readonly page: Page;
    readonly Signin: Locator;
  
    constructor(page: Page) {
      this.page = page;
      this.Signin.getByRole('button', { name: 'Anmelden' })
    }
}