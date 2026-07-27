import {test, expect, Locator} from '@playwright/test'

test('Verify the login functionality on Sauce Demo page', async ({page}) => {

    await page.goto('https://www.saucedemo.com/');

    const username: Locator = page.locator('#user-name');
    const password: Locator = page.locator('#password');
    const loginButton: Locator = page.locator('#login-button');

    await username.fill('standard_user');
    await password.fill('secret_sauce');
    await loginButton.click();

    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')
    // npx playwright test tests/example.spec.ts --project=chromium --headed

});