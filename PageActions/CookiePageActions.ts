import { CookiePageObjects } from '@objects/CookiePageObjects';
import { WebActions } from '@extensions/WebActions';
import { Page, expect } from '@playwright/test';

let webActions: WebActions;

export class CookiePageActions extends CookiePageObjects {
    readonly page: Page;

    constructor(page: Page) {
        super(page);
        this.page = page;
        webActions = new WebActions(this.page);
    }
    async CookieDialogisVisible(): Promise<void> {
        await expect(this.CookieDialog).toBeVisible()
    }
    async AcceptCookieDialog(): Promise<void> {
        await this.AcceptCookieButton.click()
    }
    async ValidateMainPage(): Promise<void> {
        await this.MainPage.isVisible()
    }
}