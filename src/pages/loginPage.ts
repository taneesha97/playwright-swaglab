import { Page, expect } from "@playwright/test";

export class LoginPage {
    readonly page: Page;
    constructor(page: Page) {
        this.page = page;
    }

    async openApplication(url: string) {
        await this.page.goto(url);
    }

    async login(username: string, password: string) {
        await this.page.fill('#user-name', username);
        await this.page.fill('#password', password);
        await this.page.click('#login-button');
        await this.page.waitForTimeout(5000);
    }
}

