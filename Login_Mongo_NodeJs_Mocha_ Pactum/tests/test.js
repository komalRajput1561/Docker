const expect = require('chai').expect;


describe('login_mongo_nodejs', () => {
    before(async() => {
      await  browser.url('/');
    //  await new Promise(resolve => setTimeout(resolve, 5000));
    });

    // it('should do something', async () => {
    //     await browser.url('http://localhost:3000/');
    //     await new Promise(resolve => setTimeout(resolve, 5000));
    //     // rest of the test
    //   });
      
    // browser.waitUntil(() => {
    //     return browser.getUrl().includes('/success');
    // }, {
    //     timeout: 5000,
    //     timeoutMsg: 'Expected URL to contain /success after 5s'
    // });
    

    it('should allow user registration', async () => {
        
        // Enter username and password
        $('#username').setValue('testuser');
        $('#password').setValue('testpassword');

        // Submit the form
        $('form').submit();

        // Verify that the user is redirected to the success page
        expect(await browser.getUrl()).to.contain('http://localhost:3000/');
        await new Promise(resolve => setTimeout(resolve, 3000));
    });

    it('should allow user login', async () => {
        // Navigate to the login page
        $('a[href="/login"]').click();

        // Enter username and password
        $('#username').setValue('testuser');
        $('#password').setValue('testpassword');

        // Submit the form
        $('form').submit();

        // Verify that the user is redirected to the secret page
        expect(await browser.getUrl()).to.contain('http://localhost:3000/');
       // await new Promise(resolve => setTimeout(resolve, 3000));
    });

    after(async () => {
        // Logout and verify that the user is redirected to the home page
        $('a[href="/logout"]').click();
        expect(await browser.getUrl()).to.equal('http://localhost:3000/');
        await new Promise(resolve => setTimeout(resolve, 3000));
    });
    
});
