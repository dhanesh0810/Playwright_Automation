import {expect, test} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
import { excelReader, LoginData } from '../utils/excelReader'

const testData : LoginData[] = excelReader('./test-data/LoginData.xlsx', 'Sheet1'); 

test.describe('Sauce Demo Login page', () => {

    for(const data of testData){

        // if(data.run !== 'yes') continue;

        test(`Verify the login functionality on Sauce Demo page - ${data.username}`, async({page}) => {

            test.skip(data.run !== 'yes', 'Run Flag = NO');

            const loginPage = new LoginPage(page);

            await test.step('Go to Login Page', async()=>{
                await loginPage.gotoLoginPage();
            });
            
            await test.step('Enter credentials on Login Page', async()=>{
                await loginPage.login(data.username, data.password);
            });
            
            await test.step('Validate Test Results', async()=>{
            if(data.expected === 'success'){
                await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
            }else{
                    await expect(loginPage.errormessage).toBeVisible();
                }
            });

        });
    }

})