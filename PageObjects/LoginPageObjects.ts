import { expect, Locator, Page } from "@playwright/test";

export class LoginPageObjects {
    protected static Login_Email = `#df-login-email`;
    protected static Login_Password = `#df-login-password`;
    readonly SubmitButton: Locator;
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
        this.SubmitButton = page.getByRole('button', { name: 'Anmelden' })
    }
}