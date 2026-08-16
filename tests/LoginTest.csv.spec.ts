import {expect, test} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
import { readCSV } from '../utils/csvReader'

const loginData = readCSV('./test-data/LoginData.csv'); 

loginData.forEach((data: any) => {

    if(data.run !== 'true') return;

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