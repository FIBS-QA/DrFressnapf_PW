import { Page } from "@playwright/test";
import { NavigationObjects } from '@navigations/NavigationObjects';

export class NavigationActions extends NavigationObjects {
  readonly page: Page;

  constructor(page: Page) {
    super(page)
    this.page = page;
  }
  async clickBookNowButton(): Promise<void> {
    await this.Booking.click()
  }
  async clickSigninButton(): Promise<void> {
    await this.Signin.click()
  }
}