const expect = require('chai').expect;

describe('DE_Build_Ontology', ()=>{
    it('should allow user login with valid credentials', async () => {
        // Navigate to the login page
       await  browser.url('https://47test.dev.decisionengines.ai/');
    
        // Enter valid username and password
        await new Promise(resolve => setTimeout(resolve, 5000));
        $('[type="text"]').setValue('komal');
        await new Promise(resolve => setTimeout(resolve, 3000));
        $('[type="password"]').setValue('dewelcome720');
        await new Promise(resolve => setTimeout(resolve, 3000));
    
        // Submit the form
       
        $('[class="de-action-btn ui-button-success jsf-button jsf-submit default de-not-default-button ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only"]').click();
    
        await new Promise(resolve => setTimeout(resolve, 3000));
    
        // Verify that the user is redirected to the dashboard page
        expect(await browser.getUrl()).to.equals('https://47test.dev.decisionengines.ai/#/app/dashboard');
        await new Promise(resolve => setTimeout(resolve, 10000));

        await $('<a class="ui-menuitem-link ui-corner-all ng-star-inserted" href="#"><!----><span class="ui-menuitem-icon fa fas fa-tools ng-star-inserted"></span><span class="ui-menuitem-text">Build</span><!----><span class="ui-submenu-icon pi pi-fw pi-caret-down ng-star-inserted"></span></a>').selectByVisibleText('<a class="ui-menuitem-link ui-corner-all ng-star-inserted" href="#"><!----><span class="ui-menuitem-icon fa fas fa-tools ng-star-inserted"></span><span class="ui-menuitem-text">Build</span><!----><span class="ui-submenu-icon pi pi-fw pi-caret-down ng-star-inserted"></span></a>');
       // await $('/html/body/app-root/de-app-root/de-app/de-two-row-layout/div/div[1]/div/div/de-app-header/div/p-megamenu/div/ul/li[1]/div').click();

        await new Promise(resolve => setTimeout(resolve, 5000));
        expect(await browser.getUrl()).to.equals('https://47test.dev.decisionengines.ai/#/app/bob');


    });

    // it('should go create Build Ontology process', async()=>{
    //  // Navigate to the login page

    //  await browser.url('https://47test.dev.decisionengines.ai/#/app/bob');
    //  await new Promise(resolve => setTimeout(resolve, 5000));
    //  await $('/html/body/app-root/de-app-root/de-app/de-two-row-layout/div/div[1]/div/div/de-app-header/div/p-megamenu/div/ul/li[1]/div').click();

    // });
})