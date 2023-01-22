import { expect, Locator, Page } from "@playwright/test";

export class NavigateToBooking {
    readonly page: Page;
    readonly Booking: Locator;

    constructor(page: Page) {
        this.page = page;
        this.Booking = page.getByRole('link', { name: 'Jetzt buchen' })
    }
    async clickBookNowButton(): Promise<void> {
        await this.Booking.click()
    }
}