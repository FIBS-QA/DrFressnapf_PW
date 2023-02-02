import path from 'path';
import AdmZip from 'adm-zip';
import fs from 'fs-extra';

async function globalTeardown() {
    const reportPath = path.join(__dirname, `html-report`);
    const zip = new AdmZip();
    zip.addLocalFolder(reportPath, `./html-report`);
    zip.writeZip('./html-report' + new Date().toJSON().slice(0, 10) + '.zip');
}
export default globalTeardown;