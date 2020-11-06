const {When, Given, Then} = require('cucumber');
const {expect} = require('chai');

When(/^I open "([^"]*)" url$/, function (url) {
    return browser.get(url);
});

Then(/^Page title should be "([^"]*)"$/, async function (pageTitle) {
    expect(await browser.getTitle()).to.be.equal(pageTitle);
});
