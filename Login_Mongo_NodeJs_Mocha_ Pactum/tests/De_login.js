const expect = require('chai').expect;

describe('DE_LoginPage', () => {

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

    await new Promise(resolve => setTimeout(resolve, 5000));
});

  it('should display error message if username is incorrect', async () => {
   
    // Navigate to the login page
    browser.url('https://47test.dev.decisionengines.ai/');

    // Enter valid username and password
    await new Promise(resolve => setTimeout(resolve, 5000));
    $('[type="text"]').setValue('komal1');
    await new Promise(resolve => setTimeout(resolve, 2000));
    $('[type="password"]').setValue('dewelcome720');
    await new Promise(resolve => setTimeout(resolve, 1000));
    // Submit the form
    $('[class="de-action-btn ui-button-success jsf-button jsf-submit default de-not-default-button ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only"]').click();

    await new Promise(resolve => setTimeout(resolve, 3000));
    // Verify that the error message is displayed
    const errorMsg = await $('/html/body/app-root/de-app-root/de-app-public/div/div[2]/de-app-public-home/de-app-messages/div/div[2]/p-growl/div/div/div/div[2]/span').getText();
    expect(errorMsg).to.equal('Invalid login credentials [komal1]');
    await new Promise(resolve => setTimeout(resolve, 3000));
  });

  it('should display error message if password is incorrect', async () => {
   

    // Navigate to the login page
    browser.url('https://47test.dev.decisionengines.ai/');

    // Enter valid username and password
    await new Promise(resolve => setTimeout(resolve, 2000));
    $('[type="text"]').setValue('komal');
    await new Promise(resolve => setTimeout(resolve, 2000));
    $('[type="password"]').setValue('dewelcome720rf');
    await new Promise(resolve => setTimeout(resolve, 1000));
    // Submit the form
    $('[class="de-action-btn ui-button-success jsf-button jsf-submit default de-not-default-button ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only"]').click();

    await new Promise(resolve => setTimeout(resolve, 2000));
    // Verify that the error message is displayed
    const errorMsg = await $('/html/body/app-root/de-app-root/de-app-public/div/div[2]/de-app-public-home/de-app-messages/div/div[2]/p-growl/div/div/div/div[2]/span').getText();
    expect(errorMsg).to.equal('Invalid login credentials [komal]');

    //Note: Here DE is not implemented to throw relevant warning message when user gives incorrect password
    await new Promise(resolve => setTimeout(resolve, 2000));
  });

  it('should display warning message if username is less than 2 characters', async () => {
    // Navigate to the login page
    browser.url('https://47test.dev.decisionengines.ai/');

    // Enter valid username and password
    await new Promise(resolve => setTimeout(resolve, 2000));
    $('[type="text"]').setValue('k');
    await new Promise(resolve => setTimeout(resolve, 2000));
    $('[type="password"]').setValue('dewelcome720');
    await new Promise(resolve => setTimeout(resolve, 1000));
    // Submit the form
    $('[class="de-action-btn ui-button-success jsf-button jsf-submit default de-not-default-button ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only"]').click();

    await new Promise(resolve => setTimeout(resolve, 2000));

    // Verify that the error message is displayed
    const errorMsg = await $('/html/body/app-root/de-app-root/de-app-public/div/div[2]/de-app-public-home/de-login/div/jsf-form/form/jsf-component/div/div/jsf-panel/de-panel/div/div/div/div/jsf-flex-layout/ul/li[1]/jsf-component/div/div/jsf-fieldset/fieldset/de-panel/div/div/div/div/jsf-field/div/div/jsf-field-body/div/jsf-flex-layout/ul/li[1]/jsf-component/div/div/jsf-text/jsf-field/div/jsf-field-errors/div/jsf-error/div').getText();
    expect(errorMsg).to.equal('Provide At Least 2 Characters');
    await new Promise(resolve => setTimeout(resolve, 2000));
  });

  it('should display warning message if password is less than 2 characters', async () => {
    // Navigate to the login page
    browser.url('https://47test.dev.decisionengines.ai/');

    // Enter valid username and password
    await new Promise(resolve => setTimeout(resolve, 2000));
    $('[type="text"]').setValue('komal');
    await new Promise(resolve => setTimeout(resolve, 2000));
    $('[type="password"]').setValue('d');
    await new Promise(resolve => setTimeout(resolve, 1000));
    // Submit the form
    $('[class="de-action-btn ui-button-success jsf-button jsf-submit default de-not-default-button ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only"]').click();

    await new Promise(resolve => setTimeout(resolve, 2000));

    // Verify that the error message is displayed
    const errorMsg = await $('/html/body/app-root/de-app-root/de-app-public/div/div[2]/de-app-public-home/de-login/div/jsf-form/form/jsf-component/div/div/jsf-panel/de-panel/div/div/div/div/jsf-flex-layout/ul/li[1]/jsf-component/div/div/jsf-fieldset/fieldset/de-panel/div/div/div/div/jsf-field/div/div/jsf-field-body/div/jsf-flex-layout/ul/li[2]/jsf-component/div/div/jsf-text/jsf-field/div/jsf-field-errors/div/jsf-error/div').getText();
    expect(errorMsg).to.equal('Provide At Least 2 Characters');
    await new Promise(resolve => setTimeout(resolve, 2000));
  });

  it('should enter the username because it is Mandatory', async()=>{

    // Navigate to the login page
    browser.url('https://47test.dev.decisionengines.ai/');

    // Enter valid username and password
    await new Promise(resolve => setTimeout(resolve, 2000));
    $('[type="text"]').setValue('');
    await new Promise(resolve => setTimeout(resolve, 2000));
    $('[type="password"]').setValue('dewelcome720');
    await new Promise(resolve => setTimeout(resolve, 1000));
    // Submit the form
    $('[class="de-action-btn ui-button-success jsf-button jsf-submit default de-not-default-button ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only"]').click();

    await new Promise(resolve => setTimeout(resolve, 2000));

    // Verify that the error message is displayed

    const errorMsg = await $('/html/body/app-root/de-app-root/de-app-public/div/div[2]/de-app-public-home/de-login/div/jsf-form/form/jsf-component/div/div/jsf-panel/de-panel/div/div/div/div/jsf-flex-layout/ul/li[1]/jsf-component/div/div/jsf-fieldset/fieldset/de-panel/div/div/div/div/jsf-field/div/div/jsf-field-body/div/jsf-flex-layout/ul/li[1]/jsf-component/div/div/jsf-text/jsf-field/div/jsf-field-errors/div/jsf-error/div').getText();
    expect(errorMsg).to.equal('Username Is Mandatory');
    await new Promise(resolve => setTimeout(resolve, 2000));
  });

  it('should enter the password because it is Mandatory', async()=>{

    // Navigate to the login page
    browser.url('https://47test.dev.decisionengines.ai/');

    // Enter valid username and password
    await new Promise(resolve => setTimeout(resolve, 2000));
    $('[type="text"]').setValue('komal');
    await new Promise(resolve => setTimeout(resolve, 2000));
    $('[type="password"]').setValue('');
    await new Promise(resolve => setTimeout(resolve, 1000));
    // Submit the form
    $('[class="de-action-btn ui-button-success jsf-button jsf-submit default de-not-default-button ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only"]').click();

    await new Promise(resolve => setTimeout(resolve, 2000));

    // Verify that the error message is displayed

    const errorMsg = await $('/html/body/app-root/de-app-root/de-app-public/div/div[2]/de-app-public-home/de-login/div/jsf-form/form/jsf-component/div/div/jsf-panel/de-panel/div/div/div/div/jsf-flex-layout/ul/li[1]/jsf-component/div/div/jsf-fieldset/fieldset/de-panel/div/div/div/div/jsf-field/div/div/jsf-field-body/div/jsf-flex-layout/ul/li[2]/jsf-component/div/div/jsf-text/jsf-field/div/jsf-field-errors/div/jsf-error/div').getText();
    expect(errorMsg).to.equal('Password Is Mandatory');
    await new Promise(resolve => setTimeout(resolve, 2000));
  });


  it('should be able to show and hide password on click', async () => {
    // Navigate to the login page
    browser.url('https://47test.dev.decisionengines.ai/');
    await new Promise(resolve => setTimeout(resolve, 5000));
  
    // Enter the password in the password field

    await $('[type="password"]').setValue('dewelcome720');

    // Click on the password eye icon to show the password
    await new Promise(resolve => setTimeout(resolve, 3000));

    await $('/html/body/app-root/de-app-root/de-app-public/div/div[2]/de-app-public-home/de-login/div/jsf-form/form/jsf-component/div/div/jsf-panel/de-panel/div/div/div/div/jsf-flex-layout/ul/li[1]/jsf-component/div/div/jsf-fieldset/fieldset/de-panel/div/div/div/div/jsf-field/div/div/jsf-field-body/div/jsf-flex-layout/ul/li[2]/jsf-component/div/div/jsf-text/jsf-field/div/div/div/de-toolbar/div/span/de-action/button').click();
    
  
    // Verify that the password is visible
    
    await new Promise(resolve => setTimeout(resolve, 5000));
    
    const passwordText = await $('/html/body/app-root/de-app-root/de-app-public/div/div[2]/de-app-public-home/de-login/div/jsf-form/form/jsf-component/div/div/jsf-panel/de-panel/div/div/div/div/jsf-flex-layout/ul/li[1]/jsf-component/div/div/jsf-fieldset/fieldset/de-panel/div/div/div/div/jsf-field/div/div/jsf-field-body/div/jsf-flex-layout/ul/li[2]/jsf-component/div/div/jsf-text/jsf-field/div/div/div/de-toolbar/div/input').getValue();
  
    await new Promise(resolve => setTimeout(resolve, 3000));

    expect(passwordText).to.equal('dewelcome720');

    await new Promise(resolve => setTimeout(resolve, 3000));

    // Click on the password eye icon again to hide the password

    await $('/html/body/app-root/de-app-root/de-app-public/div/div[2]/de-app-public-home/de-login/div/jsf-form/form/jsf-component/div/div/jsf-panel/de-panel/div/div/div/div/jsf-flex-layout/ul/li[1]/jsf-component/div/div/jsf-fieldset/fieldset/de-panel/div/div/div/div/jsf-field/div/div/jsf-field-body/div/jsf-flex-layout/ul/li[2]/jsf-component/div/div/jsf-text/jsf-field/div/div/div/de-toolbar/div/span/de-action/button/span[1]').click();
    await new Promise(resolve => setTimeout(resolve, 3000));

    // Verify that the password is hidden
    const passwordFieldType = await $('[type="password"]').getValue();
    
    await new Promise(resolve => setTimeout(resolve, 3000));
    expect(passwordFieldType).to.equal('dewelcome720');
    await new Promise(resolve => setTimeout(resolve, 1000));
  });


});