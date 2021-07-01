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
        await inputSearchField.setValue('edureka'); 

        const searchButton = await $('#search-icon-legacy');  
        searchButton.click();
    }); 

    /*
    it('should click on certain video', async () => {
        const videoAtPositionThree = await $('/html/body/ytd-app/div/ytd-page-manager/ytd-search/div[1]/ytd-two-column-search-results-renderer/div/ytd-section-list-renderer/div[2]/ytd-item-section-renderer/div[3]/ytd-video-renderer[1]/div[1]/div/div[1]/div/h3/a');
        //await expect(videoAtPositionThree).toHaveTitle('Python Full Course - Learn Python in 12 Hours | Python Tutorial For Beginners | Edureka');
        videoAtPositionThree.click();

    });
    */
});
