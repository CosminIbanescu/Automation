/*
describe ('Testing evoMag website', async => {

    
    it('should open website and verify url', async () => {
        await browser.url('https://www.evomag.ro/');
        await expect(browser).toHaveUrl('https://www.evomag.ro/');
    }); 

    it('website should has a certain title', async () => {
        await expect(browser).toHaveTitle('evoMAG.ro - Electronice si electrocasnice la un pret bun');
    });         

    it('should appear logo website', async () => {
        const logoWebsite = await $('#main_logo');
        await expect(logoWebsite).toBeDisplayed();
    });


    it('search button should be displayed', async () => {
        const searchButton = await $('//*[@id="top_search"]/div/span');
        await expect(searchButton).toBeDisplayed();
    });

    it('search button should be clickable', async () => {
        const searchButton = await $('//*[@id="top_search"]/div/span');
        expect(searchButton).toBeClickable();
    });  // error with await before expect

    it('search button should has a certain placeholder text', async () => {
        const inputSearchButton = await $('//*[@id="searchString"]');
        expect(inputSearchButton).toHaveText('ce cauti astazi?');
    });  // error with await before expect    

    it('search button input should has attributes', async () => {
        const inputSearchButton = await $('//*[@id="searchString"]');
        await expect(inputSearchButton).toHaveAttribute('class', 'placeholder', 'type', 'name', 'id');
    });  

    it('search button should has an specific id ', async () => {
        const inputSearchButton = await $('//*[@id="searchString"]');
        await expect(inputSearchButton).toHaveId('searchString');
    }); 

    it('customers tab should appear on page', async () => {
        const customersReviewTab = await $('.akw-tab-content');
        await expect(customersReviewTab).toBeDisplayed();
    });  

              
});
*/