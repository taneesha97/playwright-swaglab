import { Page, expect } from "@playwright/test";

export class CheckoutPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async openCheckoutPage(firstName: string, lastName: string, postalCode: string) {
        await this.page.click('#checkout');
        await this.page.fill('#first-name', firstName);
        await this.page.fill('#last-name', lastName);
        await this.page.fill('#postal-code', postalCode);      
        await this.page.waitForTimeout(5000);
        await this.page.click('#continue');
    }

    async checkoutConfirmation(productName: string){
        await expect(this.page.locator(`//div[@class='inventory_item_name' and text()='${productName}']`)).toBeVisible();
        await this.page.click('#finish');
    }

    async orderCompletion(confirmMsg: string, confirmDescription: string){
        await expect(this.page.locator(`//h2[@class='complete-header' and text()='${confirmMsg}']`)).toBeVisible();
        await this.page.waitForTimeout(3000);
        await expect(this.page.locator(`//div[@class="complete-text" and text()='${confirmDescription}']`)).toBeVisible();
        await this.page.click('#back-to-products'); 
    }
}