import {test} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'

test('Verify the login functionality on Sauce Demo page', async ({page}) => {

    const loginpage  = new LoginPage(page);

    await loginpage.gotoLoginPage();
    await loginpage.login('standard_user','secret_sauce');
    await loginpage.verifyLoginSuccess();

});