import {expect, test} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
import LoginData from '../test-data/LoginData.json'

LoginData.forEach((data) => {

    if(!data.run) return;

    test(`Verify the login functionality on Sauce Demo page - ${data.username}`, async ({page}) => {

        const loginpage = new LoginPage(page);

        await loginpage.gotoLoginPage();
        await loginpage.login(data.username, data.password);

        if(data.expected === 'success'){
            await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')
        }else{
            await expect(loginpage.errormessage).toBeVisible();
        }

    });

});


// test('Verify the login functionality on Sauce Demo page with invalid user', async ({page}) => {

//     const loginpage  = new LoginPage(page);

//     await loginpage.gotoLoginPage();
//     await loginpage.login(LoginData.invalid_user.username, LoginData.invalid_user.password);
//     // await loginpage.verifyLoginSuccess();
//     await expect(loginpage.errormessage).toBeVisible();

// });