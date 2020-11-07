const Wrapper = require('../helper/Wrapper');
const format = require('string-format');
const BasePage = require('./BasePage');

class LoginPage extends BasePage{

    constructor() {
        super();
        this.signInButtonTemplate = '//span[contains(text(), "{0}")]';
        this.emailField = element(by.css('#email'));
        this.passwordField = element(by.css('#password'));
        this.loginButton = element(by.css('#login'));
    }

    async loginSystem(email, password) {
        const signInButton = element(by.xpath(format(this.signInButtonTemplate, "Sign in / Register")));
        const signInNow = element(by.xpath(format(this.signInButtonTemplate, "Sign in now")));
        await Wrapper.waitForElementVisible(signInButton);
        await signInButton.click();
        await Wrapper.waitForElementVisible(signInNow);
        await signInNow.click();
        await Wrapper.sendKeys(this.emailField, email);
        await Wrapper.sendKeys(this.passwordField, password);
        await this.loginButton.click();
    }

};

module.exports = new LoginPage();


