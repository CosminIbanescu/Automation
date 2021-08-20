/*
// uncomment

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

    it('should search videos by name', async () => {
        const inputSearchField = await $('#search');
        await inputSearchField.addValue('edureka'); 

        const searchButton = await $('#search-icon-legacy');  
        searchButton.click();
    }); 

    
    it('should click on certain video', async () => {
        const videoAtPositionThree = await $('//*[@id="video-title"]');
        videoAtPositionThree.click();
    });

    it('should display the buttons: send, save and others and their PopUps ', async () => {
        const sendVideo = await $('/html/body/ytd-app/div/ytd-page-manager/ytd-watch-flexy/div[5]/div[1]/div/div[8]/div[2]/ytd-video-primary-info-renderer/div/div/div[3]/div/ytd-menu-renderer/div/ytd-button-renderer[1]/a');
        const saveVideo = await $('/html/body/ytd-app/div/ytd-page-manager/ytd-watch-flexy/div[5]/div[1]/div/div[8]/div[2]/ytd-video-primary-info-renderer/div/div/div[3]/div/ytd-menu-renderer/div/ytd-button-renderer[2]/a');
        const othersVideo = await $ ('/html/body/ytd-app/div/ytd-page-manager/ytd-watch-flexy/div[5]/div[1]/div/div[8]/div[2]/ytd-video-primary-info-renderer/div/div/div[3]/div/ytd-menu-renderer/yt-icon-button/button');
    
        await expect(sendVideo).toBeDisplayed;
        await expect(saveVideo).toBeDisplayed;
        await expect(othersVideo).toBeDisplayed;

        sendVideo.click();
        saveVideo.click();
        othersVideo.click();

        const sendVideoPopUp = await $('/html/body/ytd-app/ytd-popup-container/tp-yt-paper-dialog');
        const saveVideoPopUp = await $('/html/body/ytd-app/ytd-popup-container/tp-yt-paper-dialog[2]');
        const othersVideoPopUp = await $ ('/html/body/ytd-app/ytd-popup-container/tp-yt-iron-dropdown/div/ytd-menu-popup-renderer/tp-yt-paper-listbox');

        await expect(sendVideoPopUp).toBeDisplayed;
        await expect(saveVideoPopUp).toBeDisplayed;
        await expect(othersVideoPopUp).toBeDisplayed;

        const sendVideoPopUp2 = await $('/html/body/ytd-app/ytd-popup-container/tp-yt-paper-dialog/ytd-unified-share-panel-renderer/div[2]/yt-third-party-network-section-renderer/div[1]/yt-third-party-share-target-section-renderer/div/div/yt-share-target-renderer[2]/button');
        await expect(sendVideoPopUp2).toBeDisplayed;
    });
    
    it('should display the buttons for video control: play, next video and mute', async () => {
        const playVideo = await $('/html/body/ytd-app/div/ytd-page-manager/ytd-watch-flexy/div[5]/div[1]/div/div[1]/div/div/div/ytd-player/div/div/div[32]/div[2]/div[1]/button');
        const nextVideo = await $('/html/body/ytd-app/div/ytd-page-manager/ytd-watch-flexy/div[5]/div[1]/div/div[1]/div/div/div/ytd-player/div/div/div[32]/div[2]/div[1]/a[2]');
        const muteVideo = await $('/html/body/ytd-app/div/ytd-page-manager/ytd-watch-flexy/div[5]/div[1]/div/div[1]/div/div/div/ytd-player/div/div/div[32]/div[2]/div[1]/span/button');
    
        await expect(playVideo).toBeDisplayed;
        await expect(nextVideo).toBeDisplayed;
        await expect(muteVideo).toBeDisplayed;
    });

    it('should change to next video', async () => {
        const nextVideo = await $('/html/body/ytd-app/div/ytd-page-manager/ytd-watch-flexy/div[5]/div[1]/div/div[1]/div/div/div/ytd-player/div/div/div[32]/div[2]/div[1]/a[2]');
    
        await expect(nextVideo).toBeDisplayed;
        nextVideo.click();
    });

});


*/
// uncomment