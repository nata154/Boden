const Wrapper = require('../helper/Wrapper');
let actualItemName = '';

class BagPage{

    constructor() {
        this.itemSections = element.all(by.css('.mini-basket-drawer-item '));
        this.itemName = element(by.css('.mini-basket-drawer-item  .item-heading a'));
        this.removeItem = element(by.css('.item-remove-from-bag-button'));
        this.buttonCloseMiniBasket = element(by.css('button[aria-label="Close Minibasket"]'));
    }

    async getNameOfAddedItem() {
        await Wrapper.waitForElementVisible(this.itemName);
        actualItemName = this.itemName.getText();
        return actualItemName.then((itemName) => { return itemName});
    }

    async removeAllItemsFromBag() {
        let numberOfElements = this.itemSections;
        let numberOfElementsLength = await numberOfElements.then((items) => { return items.length});
        for (let i = 0; i < numberOfElementsLength; i++){
            await Wrapper.waitForElementClickable(this.removeItem);
            await this.removeItem.click();
        }
        await this.buttonCloseMiniBasket.click();
    }
};

module.exports = new BagPage();
