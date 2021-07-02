/*
describe ('Testing youtube platform', async => { 

    it('should open website and agree conditions', async () => {
        await browser.url('https://www.youtube.com/');
        const agreeButton = await $('//*[@id="yDmH0d"]/c-wiz/div/div/div/div[2]/div[1]/div[4]/form/div[1]/div/button');
        agreeButton.click();        
    }); 

    it('should have title, URL address and logo', async () => {
        await expect(browser).toHaveTitle('YouTube');
        await expect(browser).toHaveUrl('https://www.youtube.com/');
        const logoWebsite = await $('//*[@id="logo-icon"]');
        await expect(logoWebsite).toBeDisplayed;
    });
    
    it('should login to website', async () => {
        const connectButton = await $('/html/body/ytd-app/div/div/ytd-masthead/div[3]/div[3]/div[2]/ytd-button-renderer/a/tp-yt-paper-button');
        connectButton.click();

        const inputEmail = await $('/html/body/div[1]/div[1]/div[2]/div/div[2]/div/div/div[2]/div/div[1]/div/form/span/section/div/div/div[1]/div/div[1]/div/div[1]/input');
        await inputEmail.setValue('cosmin.webtesting@gmail.com');

        const nextStepLogin = await $('/html/body/div[1]/div[1]/div[2]/div/div[2]/div/div/div[2]/div/div[2]/div/div[1]/div/div/button');
        nextStepLogin.click();

        const inputPassword = await $('/html/body/div[1]/div[1]/div[2]/div/div[2]/div/div/div[2]/div/div[1]/div/form/span/section/div/div/div[1]/div[1]/div/div/div/div/div[1]/div/div[1]/input');
        await inputPassword.setValue('webtesting');

        nextStepLogin.click();
    });

});

*/
