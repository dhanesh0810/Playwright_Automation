import {Page, Locator} from '@playwright/test'

export class LoginPage{

    readonly page: Page;
    readonly username: Locator;
    readonly password: Locator;
    readonly loginbutton: Locator;
    readonly errormessage: Locator;

    constructor(page: Page){
        this.page = page;
        this.username = page.locator('#user-name');
        this.password = page.locator('#password');
        this.loginbutton = page.locator('#login-button');
        this.errormessage = page.locator('[data-test="error"]')
    }

    async gotoLoginPage(){
        await this.page.goto('https://www.saucedemo.com/');
    }

    async login(user: string, pass: string){
        await this.username.fill(user);
        await this.password.fill(pass);
        await this.loginbutton.click();
    }

    // async verifyLoginSuccess(){
    //     await this.page.waitForURL('https://www.saucedemo.com/inventory.html')
    // }

}
