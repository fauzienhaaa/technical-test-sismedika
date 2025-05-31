import * as loginPage from "../../page/login/login.page";
import * as route from "../../helpers/route";
import * as element from "../../helpers/element";
import * as assert from "../../helpers/assertion";
import * as loginData from "../../data/login/login.data";

beforeEach(()=> {
    route.visit('/signin');
})
describe("TS001 - Test Scenario Login", () => {
    it("TC001 - Login with valid data", () => {
        element.fillField(loginPage.usernameField, loginData.VALID_LOGIN.username);
        element.fillField(loginPage.passwordField, loginData.VALID_LOGIN.password);
        element.clickXpath(loginPage.loginButton);
        assert.shouldBeVisible(loginPage.logoutButton);
        assert.shouldContainText(loginPage.userInfo, `@${loginData.VALID_LOGIN.username}`)
    });
    it("TC002 - Login with invalid data", () => {
        element.fillField(loginPage.usernameField, loginData.INVALID_LOGIN.username);
        element.fillField(loginPage.passwordField, loginData.INVALID_LOGIN.password);
        element.clickXpath(loginPage.loginButton);
        assert.shouldBeVisible(loginPage.invCredAlert);
        assert.shouldContainText(loginPage.invCredAlert, "Username or password is invalid");
    })
    it("TC003 - Login with empty value on Username and Password", () => {
        element.fillField(loginPage.passwordField, loginData.VALID_LOGIN.password);
        assert.shouldBeVisible(loginPage.userHelper);
        assert.shouldContainText(loginPage.userHelper, "Username is required");
        assert.shouldBeDisabled(loginPage.loginButton);
        element.deleteValueField(loginPage.passwordField);
        assert.shouldBeDisabled(loginPage.loginButton);
    })
})
