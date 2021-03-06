/*
// uncomment

describe ('Testing evoMag website', async => {
 
    it('should open website and verify url', async () => {
        await browser.url('https://www.evomag.ro/');
        await expect(browser).toHaveUrl('https://www.evomag.ro/');
    }); 
 
    it('website should have a certain title', async () => {
        await expect(browser).toHaveTitle('evoMAG.ro - Electronice si electrocasnice la un pret bun');
    });         
 
    it('should appear website logo', async () => {
        const logoWebsite = await $('#main_logo');
        await expect(logoWebsite).toBeDisplayed();
    });
 
    it('search button should be displayed', async () => {
        const searchButton = await $('//*[@id="top_search"]/div/span');
        await expect(searchButton).toBeDisplayed();
    });
 
    it('search button should be clickable', async () => {
        const searchFieldButton = await $('//*[@id="top_search"]/div/div[1]/input');
        await expect(searchFieldButton).toBeEnabled();
    });

    it('search button input should have attributes', async () => {
        const inputSearchButton = await $('//*[@id="searchString"]');
        await expect(inputSearchButton).toHaveAttribute('autocomplete', 'off');
    });
 
    it('search button should have a specific id ', async () => {
        const inputSearchButton = await $('//*[@id="searchString"]');
        await expect(inputSearchButton).toHaveId('searchString');
    }); 
 
    it('customers tab should appear on page', async () => {
        const customersReviewTab = await $('.akw-tab-content');
        await expect(customersReviewTab).toBeDisplayed();
    });  
 
 
});

// uncomment
*/
