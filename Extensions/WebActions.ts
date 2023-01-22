import { Locator, Page, expect} from '@playwright/test';
import * as CryptoJS from 'crypto-js';
import { testconfig } from '../testconfig';

const waitForElement = testconfig.waitForElement;

export class WebActions {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }
    async navigateToURL(url: string) {
        this.page.goto(url);
    }
    async fillElementText(locator: string, text: string): Promise<void> {
        await this.page.fill(locator, text);
    }
    async enterElementText(locator: string, text: string): Promise<void> {
        await this.page.fill(locator, text);
    }
    async decipherPassword(): Promise<string> {
        const key = `SECRET`;
        //ENCRYPT
        // const cipher = CryptoJS.AES.encrypt('pw',key);
        // console.log(cipher.toString());
        return CryptoJS.AES.decrypt(testconfig.password, key).toString(CryptoJS.enc.Utf8);
    }
    async clickElement(locator: any): Promise<void> {
        await this.page.click(locator);
    }
    async verifyElementIsVisible(locator: any, errorMessage: string): Promise<void> {
        await this.page.waitForSelector(locator, { state: `visible`, timeout: waitForElement })
            .catch(() => { throw new Error(`${errorMessage}`); 
        });
    }
    async verifyElementText(locator: string, text: string): Promise<void> {
        const textValue = await this.page.textContent(locator);
        expect(textValue.trim()).toBe(text);
    }
}