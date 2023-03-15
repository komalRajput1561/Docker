//JavaScript configuration file for running end-to-end tests with the WebDriverIO test automation framework

exports.config = {                   //This line exports a configuration object for WebDriverIO to use.
    specs: [
        './tests/test.js'            //This line specifies the location of the test files to run
      ],
    runner: 'local',                 //This line specifies the runner to use. In this case, it's the local runner, which runs tests on the local machine.
    capabilities: [                  //This section defines the capabilities of the browser to use for running the tests
        {
            maxInstances: 1,
            browserName: 'chrome',   //running the tests on a single instance of Chrome browser
            chromePath: '/path/to/chrome'

        },
    ],
    logLevel: 'error',               //This line specifies the log level to use. In this case, it's set to 'error', which means that only error messages will be logged.
    bail: 0,                         //This line specifies the number of allowed test failures before the test run is aborted. A value of 0 means that all tests will be run, regardless of the number of failures.
    baseUrl: 'http://localhost:3000',
    waitforTimeout: 10000,           //default wait time for WebDriverIO commands to complete it's set to 10 seconds.
    connectionRetryTimeout: 90000,   //These lines specify the timeout and number of retries for establishing a connection with the browser.
    connectionRetryCount: 3,
    framework: 'mocha',
    reporters: ['spec'],             //This line specifies the reporters to use for generating test reports.
    before: async function () {
        await new Promise(resolve => setTimeout(resolve, 5000));
      },
    mochaOpts: {
        ui: 'bdd',                   //Behavior-Driven Development
        timeout: 60000,
        
    },
};
