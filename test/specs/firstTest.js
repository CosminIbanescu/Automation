
// first lesson
/*
describe('eMag.ro', () => {
 
    it('should load', async () => {
 
        await browser.url('http://emag.ro'); 
        
        const searchBox = await $('#searchboxTrigger');
        const helpLink  = await $('.navbar-aux-help-link');
        const firstButon = await $('//*[@id="main-container"]/section[3]/div/div/div[1]');
    
        helpLink.click();
    });
 
// above test try a loading page test
});
 
// end first lesson 
*/
 
/*
// start second lesson
 
describe ('eMag.ro', () =>  {
 
    it ('should have the corect page title', async () => {
        await browser.url('http://emag.ro'); 
        await expect(browser).toHaveTitle('eMAG.ro - Libertate în fiecare zi');
    });
 
    it ('should contain a cart button', async () => {
        const cartButton = await $('#my_cart'); 
        await expect(cartButton).toBeDisplayed();
    });
 
    it ('should open eMag Genius page', async () => {
        const geniusButton = await $('[title="eMAG Genius"]'); 
        await geniusButton.click();
        await expect(browser).toHaveTitle('eMAG genius: serviciul tău premium de cumpărături - eMAG.ro');
    });
 
    it ('should have a working search', async () => {
        const searchBox = await $('#searchboxTrigger');
        const searchButton = await $('.searchbox-submit-button'); 
 
        await searchBox.setValue('Tricou Polo');
        await searchButton.click();
 
        await expect(browser).toHaveTitle('Cauți Tricou Polo? Alege din oferta eMAG.ro');
    });
 
});
 
// end second lesson 
*/