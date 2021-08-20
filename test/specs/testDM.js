/*
// uncomment

describe('demoblaze.com', () => {
 
     
    it('should open website', async () => {
        
        await browser.url('https://www.demoblaze.com/');      
    });

    
    it('should open login', async () => {
        const pageLoginButton = await $('#login2');  
        await pageLoginButton.click();
    });

    it('should login', async () => {
        const usernameField = await $('#loginusername'); 
        await usernameField.setValue('Test'); 
        
        const passwordField = await $('#loginpassword');
        await passwordField.setValue('Passx');

        const loginButonFormular = await $('.btn btn-primary');
        loginButonFormular.click();
    });

    it('should open Laptops section', async () => {
        const laptopsSection = await $('//*[@id="itemc"]');   //dar xpath este comun la toate cele 3 sectiuni
        laptopsSection.click();

        const sonyVaio5 = await $('//*[@id="tbodyid"]/div[1]/div/div/h4/a');
        sonyVaio5.click(); 

        const addToCartButton = await $('.btn btn-success btn-lg');
        addToCartButton.click(); 

        const cart = await $('#cartur');
        cart.click(); 
    });

});

// uncomment
*/