import { LoginPageObjects } from "@objects/LoginPageObjects";
import { WebActions } from "@extensions/WebActions";
import type { Page } from '@playwright/test';
import { testconfig } from '../testconfig';

let webActions: WebActions;

export class LoginPageActions extends LoginPageObjects {
    readonly page: Page;

    constructor(page: Page) {
        super(page);
        this.page = page;
        webActions = new WebActions(this.page);
    }

    async enterLoginCredentials(): Promise<void> {
        const decipherPassword = await webActions.decipherPassword();
        await webActions.enterElementText(LoginPageObjects.Login_Email, testconfig.username);
        await webActions.enterElementText(LoginPageObjects.Login_Password, decipherPassword);
    }
    async clickSubmitButton(): Promise < void> {
        await this.SubmitButton.click()
        }
    }