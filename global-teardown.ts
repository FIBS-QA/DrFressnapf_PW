import path from 'path';
import AdmZip from 'adm-zip';
import fs from 'fs-extra';

async function globalTeardown() {
    fs.mkdirs('html-report', function (err) {
        if (err)
            return console.error(err);
        console.log("no folder!");
    })
    fs.mkdirsSync('html-report'), console.log("successfully created folder!");

    const pathtoFile = path.join(__dirname, './html-report/index.html');
    const newHtmlName = './HTML_Report' + Date.now() + '.html'
    const newPathtoFile = path.join(__dirname, './html-report/' + newHtmlName);
    fs.rename(pathtoFile, newPathtoFile, (err) => { if (err) console.log(err) })
    const zip = new AdmZip();
    const reportPath = path.join(__dirname, './html-report');
    //const reportFolder = path.join(__dirname, './Test-Reports');
    zip.addLocalFolder(reportPath, './Test-Reports');
    zip.writeZip('Test_Report' + new Date().toJSON().slice(0, 10) + '.zip');
    //fs.copyFile('Test_Report' + new Date().toJSON().slice(0, 10) + '.zip', reportPath)
}

export default globalTeardown;