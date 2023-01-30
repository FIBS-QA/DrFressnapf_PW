import {expect, test, APIRequest, APIResponse} from '@playwright/test';
import fs from 'fs-extra';

export class APIActions {

    async verifyStatusCode(response: APIResponse): Promise<void> {
        await expect(response, `200 Status code was displayed.`).toBeOK();
    }
}