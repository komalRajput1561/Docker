// const expect = require('chai').expect;


// describe('login_mongo_nodejs', () => {
//     before(async() => {
//       await  browser.url('/');
//     //  await new Promise(resolve => setTimeout(resolve, 5000));
//     });
//     // it('should allow user registration', async () => {
        
//     //     // Enter username and password
//     //     $('#username').setValue('komal');
//     //     $('#password').setValue('dewelcome720');

//     //     // Submit the form
//     //     $('form').submit();

//     //     // Verify that the user is redirected to the success page
//     //     expect(await browser.getUrl()).to.contain('https://47test.dev.decisionengines.ai');
//     //     await new Promise(resolve => setTimeout(resolve, 3000));
//     // });

//     it('should allow user login', async () => {
//         // Navigate to the login page
//         $('a[href="/login"]').click();

//         // Enter username and password
//         $('#username').setValue('komal');
//         $('#password').setValue('dewelcome720');

//         // Submit the form
//         $('form').submit();

//         // Verify that the user is redirected to the secret page
//         expect(await browser.getUrl()).to.contain('https://47test.dev.decisionengines.ai/#/public');
//        // await new Promise(resolve => setTimeout(resolve, 3000));
//     });

//     // it('should allow user to go Dashboard', async () => {
//     //     // Navigate to the login page
//     //     $('a[href="/login"]').click();

//     //     // Enter username and password
//     //     $('#username').setValue('komal');
//     //     $('#password').setValue('dewelcome720');

//     //     // Submit the form
//     //     $('form').submit();

//     //     // Verify that the user is redirected to the secret page
//     //     expect(await browser.getUrl()).to.contain('https://47test.dev.decisionengines.ai/#/app/dashboard');
//     //    // await new Promise(resolve => setTimeout(resolve, 3000));
//     // });

//     it('should allow user logout', async () => {
//         // Navigate to the login page
//         $('a[href="/logout"]').click();

//         // Verify that the user is redirected to the secret page
//         expect(await browser.getUrl()).to.contain('https://47test.dev.decisionengines.ai/#/public');
//        // await new Promise(resolve => setTimeout(resolve, 3000));
//     });

//     after(async () => {
//         // Logout and verify that the user is redirected to the home page
//         $('a[href="/logout"]').click();
//         expect(await browser.getUrl()).to.equal('https://47test.dev.decisionengines.ai/#/public');
//         await new Promise(resolve => setTimeout(resolve, 3000));
//     });
    
// });


const expect = require('chai').expect;

describe('login_mongo_nodejs', () => {

  it('should allow user login with valid credentials', async () => {
    // Navigate to the login page
    browser.url('https://47test.dev.decisionengines.ai/');

    // Enter valid username and password
    await new Promise(resolve => setTimeout(resolve, 10000));
    $('[type="text"]').setValue('komal');
    await new Promise(resolve => setTimeout(resolve, 2000));
    $('[type="password"]').setValue('dewelcome720');
    await new Promise(resolve => setTimeout(resolve, 1000));
    // Submit the form
   
    $('[class="de-action-btn ui-button-success jsf-button jsf-submit default de-not-default-button ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only"]').click();

    await new Promise(resolve => setTimeout(resolve, 3000));
    console.log("manj is here");
    console.log(browser.getUrl());

    // Verify that the user is redirected to the dashboard page
    expect(await browser.getUrl()).to.equals('https://47test.dev.decisionengines.ai/#/app/dashboard');
   
});

//   it('should allow user login with valid credentials', async () => {
//     // Navigate to the login page
//     //$('a[href="/login"]').click();

//     // $('#username').addValue('komal') ;
//     // $('#password').addValue('dewelcome720') ;

//     // Enter valid username and password
//     $('#username').addValue('komal');
//     $('#password').addValue('dewelcome720');

//     // Submit the form
//     $('form').submit();
//     await new Promise(resolve => setTimeout(resolve, 3000));
//     // Verify that the user is redirected to the dashboard page
//     expect(await browser.getUrl()).to.contain('https://47test.dev.decisionengines.ai/');
//     await new Promise(resolve => setTimeout(resolve, 3000));
//   });

//   it('should display error message if username is less than 2 characters', async () => {
//     // Navigate to the login page
//     $('a[href="/login"]').click();

//     // Enter invalid username and valid password
//     $('#username').setValue('k');
//     $('#password').setValue('dewelcome720');

//     // Submit the form
//     $('form').submit();

//     // Verify that the error message is displayed
//     const errorMsg = await $('#Invalid login credentials [#username]').getText();
//     expect(errorMsg).to.equal('Username must be at least 2 characters.');
//   });

//   it('should display error message if password is less than 2 characters', async () => {
//     // Navigate to the login page
//     $('a[href="/login"]').click();

//     // Enter valid username and invalid password
//     $('#username').setValue('komal');
//     $('#password').setValue('d');

//     // Submit the form
//     $('form').submit();

//     // Verify that the error message is displayed
//     const errorMsg = await $('#Invalid login credentials [#username]').getText();
//     expect(errorMsg).to.equal('Password must be at least 2 characters.');
//   });

//   it('should display error message if username or password is incorrect', async () => {
//     // // Navigate to the login page
//     // $('a[href="/login"]').click();

//     // Enter invalid username and password
//     $('#username').setValue('komal');
//     $('#password').setValue('wrongpassword');

//     // Submit the form
//     $('form').submit();

//     // Verify that the error message is displayed
//     const errorMsg = await $('#Invalid login credentials [#username]').getText();
//     expect(errorMsg).to.equal('Invalid login credentials [#username]');
//   });

//   it('should navigate to the dashboard page after successful login', async () => {
//     // Navigate to the login page
//     $('a[href="/login"]').click();

//     // Enter valid username and password
//     $('#username').setValue('komal');
//     $('#password').setValue('dewelcome720');

//     // Submit the form
//     $('form').submit();

//     // Wait for dashboard page to load
//     await browser.waitUntil(async () => {
//       return (await browser.getUrl()).includes('https://47test.dev.decisionengines.ai/#/app/dashboard');
//     }, { timeout: 20000, timeoutMsg: 'Dashboard page did not load' });

//     // Verify that the dashboard page is displayed
//     expect(await browser.getUrl()).to.contain('https://47test.dev.decisionengines.ai/#/app/dashboard');
//   });

//   it('should allow user logout', async () => {
//     // Navigate to the logout page
//     browser.url('https://47test.dev.decisionengines.ai/');

//     $('a[href="/logout"]').click();

//     // Verify that the user is redirected to the public page
//     expect(await browser.getUrl()).to.contain('https://47test.dev.decisionengines.ai/#/public');
//   });

//   after(async () => {
//             // Logout and verify that the user is redirected to the home page
//             $('a[href="/logout"]').click();
//             expect(await browser.getUrl()).to.equal('https://47test.dev.decisionengines.ai/#/public');
//             await new Promise(resolve => setTimeout(resolve, 3000));
//         });
});
