import { request } from "@playwright/test";
async function globalSetup() {
    const requestContext = await request.newContext()
    requestContext.get(`https://dr.fressnapf.de/api/sprechstunde-buchen/`);
    requestContext.storageState({ path: 'storageStateAPI.json' })
    requestContext.dispose()
}
export default globalSetup;