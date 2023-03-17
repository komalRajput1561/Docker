// const driver = require('pactum');
// const { By } = require('selenium-webdriver');
// const { describe, it } = require('mocha');
// //const { driver } = require('pactum-webdriver');
// //const driver = require('pactum');

// describe('Login page', () => {
//   beforeEach(function () {
//           driver.get("http://localhost:3000/");
//         });
      
//     it('should be able to login successfully', async () => {
//       // start the WebDriver session
//       //await driver.start();
  
//       // navigate to the login page
//   //    await driver.get('http://localhost:3000/');
  
//       // enter username and password
//       const usernameField = driver.findElement(By.name('username'));
//       const passwordField = driver.findElement(By.name('password'));
//       await usernameField.sendKeys('myusername');
//       await passwordField.sendKeys('mypassword');
  
//       // submit the login form
//       const submitButton = driver.findElement(By.tagName('button'));
//       await submitButton.click();
  
//       // assert that the user is redirected to the secret page
//       await driver.wait(() => driver.getCurrentUrl().then(url => url.endsWith('http://localhost:3000/')), 10000);
//       await driver.getCurrentUrl().should.eventually.endWith('http://localhost:3000/');
  
//       // close the WebDriver session
//       await driver.stop();
//     });
//   });



// const { request } = require('pactum');
// const { Builder, By, Key, until } = require('selenium-webdriver');
// const { describe, it } = require('mocha');
// const expect = require('chai').expect;
// const chrome = require('selenium-webdriver/chrome');

// describe('Login tests', () => {

//     let driver;
  
//     // Start the WebDriver session before the tests
//     before(async () => {
//       let options = new chrome.Options().headless().windowSize({ width: 1920, height: 1080 });
//       driver = await new Builder().forBrowser('chrome').setChromeOptions(options).build();
//     });
  
//     // End the WebDriver session after the tests
//     after(async () => {
//       await driver.quit();
//     });
  
//     // Test login API endpoint
//     it('should return status code 200 on successful login', async () => {
//       await request.post('/login')
//         .withJson({
//           username: 'testuser',
//           password: 'testpassword'
//         })
//         .expect(200);
//     });
  
//     // Test successful login with browser automation
//     it('should successfully log in with browser automation', async () => {
//       // Navigate to login page
//       await driver.get('http://localhost:3000/');
  
//       // Enter username and password
//       await driver.findElement(By.id('username')).sendKeys('testuser');
//       await driver.findElement(By.id('password')).sendKeys('testpassword');
  
//       // Click login button
//       await driver.findElement(By.css('button[type=submit]')).click();
  
//       // Verify that we are on the secret page
//       await driver.wait(until.urlContains('http://localhost:3000/'), 5000);
//     });
  
//   });
  

// const webdriver = require('selenium-webdriver');
// const chrome = require('selenium-webdriver/chrome');
// const assert = require('assert');
// const pactum = require('pactum');
// const { driver } = require('pactum-webdriver');
// const { describe, it } = require('mocha');

// describe('Login functionality', function() {
//   this.timeout(30000);
//   let server = pactum.spec.server('http://localhost:3000');
//  //let driver;

//   before(async function() {
//     let options = new chrome.Options().headless().windowSize({ width: 1920, height: 1080 });
//     driver = await new webdriver.Builder().forBrowser('chrome').setChromeOptions(options).build();
//     await server.start();
//   });

//   after(async function() {
//     await server.stop();
//     await driver.quit();
//   });

//   it('should load the home page', async function() {
//     await driver.get('http://localhost:3000/');
//     let title = await driver.getTitle();
//     assert.strictEqual(title, 'Home');
//   });

//   it('should allow user to register', async function() {
//     await driver.get('http://localhost:3000/');
//     await driver.findElement(webdriver.By.name('username')).sendKeys('testuser');
//     await driver.findElement(webdriver.By.name('password')).sendKeys('testpassword');
//     await driver.findElement(webdriver.By.css('button[type="submit"]')).click();
//     let res = await server.post('/register').withJson({username: 'testuser', password: 'testpassword'});
//     assert.strictEqual(res.statusCode, 200);
//   });

//   it('should allow user to login', async function() {
//     await driver.get('http://localhost:3000/login');
//     await driver.findElement(webdriver.By.name('username')).sendKeys('testuser');
//     await driver.findElement(webdriver.By.name('password')).sendKeys('testpassword');
//     await driver.findElement(webdriver.By.css('button[type="submit"]')).click();
//     let title = await driver.getTitle();
//     assert.strictEqual(title, 'Secret');
//   });
// });




  

const { Builder, By } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const { Options } = chrome;
const expect = require('chai').expect;

// const chromeOptions = new Options();
// chromeOptions.addArguments('--headless');
// chromeOptions.addArguments('--disable-gpu');
// chromeOptions.addArguments('--no-sandbox');

// const browser = new Builder()
//   .forBrowser('chrome')
//   .setChromeOptions(chromeOptions)
//   .setChromeService(new chrome.ServiceBuilder('/path/to/chrome'))
//   .build();

const pactum = require('pactum');

describe('Authentication', function() {
  beforeEach(async function() {
    await  browser.url('/');
   // await driver.get('');
  });

  // afterEach(async function() {
  //   await browser.quit();
  // });

  it('should register a user', async function() {
    //const registerLink = await browser.findElement(By.linkText('Register'));
    // await registerLink.click();
    // await browser.findElement(By.name('username')).sendKeys('Rakshith');
    // await browser.findElement(By.name('password')).sendKeys('Rak@123');
    // await browser.findElement(By.name('submit')).click();
    
      // Enter username and password
      $('#username').setValue('testuser');
      $('#password').setValue('testpassword');

      // Submit the form
      $('form').submit();

    expect(await browser.getUrl()).to.contain('http://localhost:3000/');
    await new Promise(resolve => setTimeout(resolve, 3000));

    const res = await pactum.spec()
      .post('http://localhost:3000/register')
      .withJson({
        username: 'Rakshith',
        password: 'Rak@123'
      })
      .expectStatus(200)
      .end();

    expect(res.json().username).toBe('Rakshith');
  });

  it('should log in a user', async function() {
  //   const loginLink = await browser.findElement(By.linkText('Login'));
  //   await loginLink.click();
  //  // await browser.findElement(By.linkText('Login')).click();
  //   await browser.findElement(By.name('username')).sendKeys('Rakshith');
  //   await browser.findElement(By.name('password')).sendKeys('Rak@123');
  //   const submitLink = await browser.findElement(By.name('submit'));
  //   await submitLink.click();
    //await browser.findElement(By.name('submit')).click();

     // Navigate to the login page
     $('a[href="/login"]').click();

     // Enter username and password
     $('#username').setValue('testuser');
     $('#password').setValue('testpassword');

     // Submit the form
     $('form').submit();

     // Verify that the user is redirected to the secret page
     expect(await browser.getUrl()).to.contain('http://localhost:3000/');

    const res = await pactum.spec()
      .post('http://localhost:3000/login')
      .withJson({
        username: 'Rakshith',
        password: 'Rak@123'
      })
      .expectStatus(200)
      .end();

    expect(res.json().username).toBe('Rakshith');
  });

  it('should log out a user', async function() {
    const LogoutLink = await browser.findElement(By.linkText('Logout'));
    await LogoutLink.click();
   // await browser.findElement(By.linkText('Logout')).click();

    const res = await pactum.spec()
      .get('http://localhost:3000/logout')
      .expectStatus(200)
      .end();

    expect(res.body).toBe('OK');
  });

  after(async () => {
    // Logout and verify that the user is redirected to the home page
    $('a[href="/logout"]').click();
    expect(await browser.getUrl()).to.equal('http://localhost:3000/');
    await new Promise(resolve => setTimeout(resolve, 3000));
});
  
});
