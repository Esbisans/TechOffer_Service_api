const puppeteer = require('puppeteer');
const $ = require('cheerio');

const url = 'https://scrapeme.live/shop/';

( async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto(url);

})();

async function checkPrice(page){

    await page.reload();
    let 

}