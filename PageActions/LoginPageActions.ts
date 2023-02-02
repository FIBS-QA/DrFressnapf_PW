import { LoginPageObjects } from "@objects/LoginPageObjects";
import { WebActions } from "@extensions/WebActions";
import type { Page } from '@playwright/test';
import { testconfig } from '../testconfig';
import { faker } from "@faker-js/faker";

let webActions: WebActions;

export class LoginPageActions extends LoginPageObjects {
    readonly page: Page;

    constructor(page: Page) {
        super();
        this.page = page;
        webActions = new WebActions(this.page);
    }

    async enterInvalidLoginCredentials(): Promise<void> {
    await webActions.enterElementText(LoginPageObjects.Login_Email, faker.internet.email())
    await webActions.enterElementText(LoginPageObjects.Login_Email, faker.internet.password())
    }
    
    async enterValidLoginCredentials(): Promise<void> {
        const decipherPassword = await webActions.decipherPassword();
        await webActions.enterElementText(LoginPageObjects.Login_Email, testconfig.username);
        await webActions.enterElementText(LoginPageObjects.Login_Password, decipherPassword);
    }
}