import { Locator, Page } from "@playwright/test";

export class NavigationObjects {
    readonly page: Page;
    readonly Booking: Locator;
    readonly Signin: Locator;

    constructor(page: Page) {
        this.page = page;
        this.Booking = page.getByRole('link', { name: 'Jetzt buchen' })
        this.Signin = page.getByRole('button', { name: 'Anmelden' })

    }
}