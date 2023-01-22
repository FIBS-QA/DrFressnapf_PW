import { CookiePageObjects } from '@objects/CookiePageObjects';
import { WebActions } from '@extensions/WebActions';
import { Locator, Page, expect } from '@playwright/test';
import { testconfig } from 'testconfig';

let webActions: WebActions;

export class CookiePageActions extends CookiePageObjects {
    readonly page: Page;

    constructor(page: Page) {
        super(page);
        this.page = page;
        webActions = new WebActions(this.page);
    }

    async navigateToURL(): Promise<void> {
        await webActions.navigateToURL('https://dr.fressnapf.de/');
    }
    async CookieDialogisVisible(): Promise<void> {
        await expect(this.CookieDialog).toBeVisible() 
        //await webActions.verifyElementIsVisible(this.CookieDialog, "Cookie dialog is not visible")
    }
    async AcceptCookieDialog(): Promise<void> {
        await this.AcceptCookieButton.click() 
        //await webActions.clickElement(this.AcceptCookieButton)
    }
    async ValidateMainPage(): Promise<void> {
        await this.MainPage.isVisible();
    }
}