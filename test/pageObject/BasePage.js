const Wrapper = require('../helper/Wrapper');

class BasePage {

    constructor() {
        this.acceptCookie = element(by.css('button#onetrust-accept-btn-handler'));
        this.searchButton = element(by.css('button[aria-label="Search Panel Toggle Button"]'));
        this.basketButton = element(by.css('button[aria-label="Mini Basket Toggle Button"]'));
    }

    async clickAcceptCookie() {
        await this.acceptCookie.click();
    }

    async clickSearchButton() {
        await Wrapper.waitForElementClickable(this.searchButton);
        await this.searchButton.click();
    }

    async clickBasketButton() {
        browser.sleep(1000); //need to fix, to write special wait for changing amount in basket
        await Wrapper.waitForElementClickable(this.basketButton);
        await this.basketButton.click();
    }

};

module.exports = BasePage;

