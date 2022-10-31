const puppeteer = require('puppeteer');
const $ = require('cheerio');

const url = 'https://scrapeme.live/shop/';

( async () => {
    const browser = await puppeteer.launch({ headless: false});
    const page = await browser.newPage();

    await page.goto(url);

    await page.type('.search-field', 'charmander');
    await page.keyboard.press('Enter');

    await page.waitForSelector('[site-main]');
    const html = await page.evaluate(() => document.body.innerHTML);


    $('#woocommerce-Price-amount amount',html).each(() => {
        const dollarPrice = $(this).text();
        console.log(dollarPrice);
    })

    //await page.screenshot({path: 'scrap1.jpg'});

    await browser.close();

})();