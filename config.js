const path = require('path');

exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: [path.resolve('./test/features/**/*.feature')],
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    capabilities: {
        browserName: 'chrome',
    },
    disableChecks: true,
    cucumberOpts: {
        require: [path.resolve('./test/step_definitions/**/*.js')],
        ignoreUncaughtExceptions: true,
        format: ['json:./test/reports/report.json'],
        tags:  '@basket' ,
    },
    onPrepare: () => {
        browser.manage().window().maximize();
        return browser.waitForAngularEnabled(false);
    },
};