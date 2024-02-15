const { links, pages } = require('./deleteTurboPages');
const puppeteer = require('puppeteer');

(async () => {
    const browserURL = 'http://localhost:9223';
    const browser = await puppeteer.connect({ browserURL });

    const page = await browser.newPage();
    await page.waitForTimeout(500);

    for (let i = 0; i < links.length; i++) {
        try {
            await page.goto(`https://webmaster.yandex.ru/site/https:${links[i]}:443/turbo/sources/`);
            await page.waitForTimeout(3000);

            // Получаем текст элемента
            const button = await page.$('.button2_view_classic');

            // Получаем значение атрибута aria-pressed
            const isPressed = await page.evaluate(el => el.getAttribute('aria-pressed'), button);

            // Проверяем, равен ли атрибут 'true' и нажимаем на кнопку
            if (isPressed === 'true') {
                await button.click();
            }


            console.log(links[i]);
        } catch (error) {
            console.error(`Ошибка на ссылке ${links[i]}:`, error);
        }
    }
})();