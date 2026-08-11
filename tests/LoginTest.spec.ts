import {expect, test} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
import LoginData from '../test-data/LoginData.json'

test('Verify the login functionality on Sauce Demo page with valid user', async ({page}) => {

    const loginpage  = new LoginPage(page);

    await loginpage.gotoLoginPage();
    await loginpage.login(LoginData.valid_user.username, LoginData.valid_user.password);
    // await loginpage.verifyLoginSuccess();
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')

});

test('Verify the login functionality on Sauce Demo page with invalid user', async ({page}) => {

    const loginpage  = new LoginPage(page);

    await loginpage.gotoLoginPage();
    await loginpage.login(LoginData.invalid_user.username, LoginData.invalid_user.password);
    // await loginpage.verifyLoginSuccess();
    await expect(loginpage.errormessage).toBeVisible();

});