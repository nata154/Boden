const {When, Given, Then} = require('cucumber');
const {expect} = require('chai');
const LoginPage = require('../pageObject/LoginPage');
const MainPage = require('../pageObject/MainPage');
const ResultSearchPage = require('../pageObject/ResultSearchPage');
const BagPage = require('../pageObject/BagPage')
let chosenItemName = '';
let expectedItem = '';

When(/^I open "([^"]*)" url$/, function (url) {
    return browser.get(url);
});

Then(/^Page title should be "([^"]*)"$/, async function (pageTitle) {
    expect(await browser.getTitle()).to.be.equal(pageTitle);
});

Then('I login system with login {string} and password {string}', async function (email, password) {
    await LoginPage.loginSystem(email, password);
});

Then(/^I click search button$/, async function () {
    await MainPage.clickSearchButton();
});

Then(/^I enter item for search "([^"]*)"$/, async function (item) {
    await MainPage.enterSearchItem(item);
});

Then(/^I add to my bag first item$/, async function () {
    chosenItemName = await ResultSearchPage.addFirstItem();
});

Then(/^I click basket button$/, async function () {
    await MainPage.clickBasketButton()
});

Then(/^I expect name of item equals to chosen$/, async function () {
    expectedItem = await BagPage.getNameOfAddedItem();
    expect(chosenItemName).to.equal(expectedItem);
});

Then(/^I remove chosen item from bag$/, async function () {
    await BagPage.removeAllItemsFromBag();
});