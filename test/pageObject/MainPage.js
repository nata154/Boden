const Wrapper = require('../helper/Wrapper');
const BasePage = require('./BasePage');

class MainPage extends BasePage{

    constructor() {
        super();
        this.searchInput = element(by.css('#searchInput'));
        this.searchAutosuggestFirstItem = element(by.css('#searchAutosuggest a'))
    }

    async clickSearchButton() {
        await Wrapper.waitForElementClickable(this.searchButton);
        await this.searchButton.click();
    }

    async enterSearchItem(itemName) {
        await Wrapper.sendKeys(this.searchInput, itemName);
        await Wrapper.waitForElementVisible(this.searchAutosuggestFirstItem);
        await this.searchAutosuggestFirstItem.click();
        browser.sleep(2000); // need special wait
    }
};

module.exports = new MainPage();

