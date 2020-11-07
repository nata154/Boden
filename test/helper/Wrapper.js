const EC = protractor.ExpectedConditions;
const defaultTimeout = 20 * 1000;
let {setDefaultTimeout} = require('cucumber');
setDefaultTimeout(60 * 1000);

class Wrapper {

    async waitForElementClickable(element, timeOut = defaultTimeout, isThrowError = true) {
        try {
            console.log("waitForElementClickable" + element);
            await browser.driver.wait(EC.elementToBeClickable(element), timeOut, `Element with selector type '${element.elementArrayFinder_.locator().using}' and selector '${element.elementArrayFinder_.locator().value}' is invisible`);
        } catch (e) {
            if (isThrowError) {
                throw new Error(e);
            }
        }
    }

    async waitForElementVisible(element, timeOut = defaultTimeout, isThrowError = true) {
        try {
            await browser.driver.wait(EC.visibilityOf(element), timeOut, `Element with selector type '${element.elementArrayFinder_.locator().using}' and selector '${element.elementArrayFinder_.locator().value}' is invisible`);
        } catch (e) {
            if (isThrowError) {
                throw new Error(e);
            }
        }
    }

    async waitForElementNotVisible(element, timeOut = defaultTimeout, isThrowError = true) {
        try {
            await browser.driver.wait(EC.invisibilityOf(element), timeOut, `Element with selector type '${element.elementArrayFinder_.locator().using}' and selector '${element.elementArrayFinder_.locator().value}' is visible`);
        } catch (e) {
            if (isThrowError) {
                throw new Error(e);
            }
        }
    }

    async sendKeys(element, text) {
        await this.waitForElementClickable(element);
        await element.click();
        await element.sendKeys(text);
    }
}

module.exports = new Wrapper();
