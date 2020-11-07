const Wrapper = require('../helper/Wrapper');
const BasePage = require('./BasePage');
let itemName = '';

class ResultSearchPage extends BasePage{

    constructor() {
        super();
        this.itemLoaded = element(by.css('.product-grid-items .product-item-link'))
        this.itemSize = element(by.css('.product-option-value'));
        this.addToBag = element(by.css('.productAddToBagButton-button'));
        this.itemTitle = element(by.css('.product-title-header-style-description'));
    }

    async addFirstItem() {
        await this.clickAcceptCookie();
        await Wrapper.waitForElementClickable(this.itemLoaded);
        await this.itemLoaded.click();
        itemName = this.itemTitle.getText();
        await this.itemSize.click();
        await this.addToBag.click();
        return itemName.then((itemName) => { return itemName});
    }

};

module.exports = new ResultSearchPage();
