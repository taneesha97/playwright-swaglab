import { Page, expect } from "@playwright/test";

export class ProductPage {
    readonly page: Page;
    constructor(page: Page) {
        this.page = page;
    }

    async addProductToCart(productName: string) {
        await this.page.locator(`//div[@class='inventory_item_name ' and text()='${productName}']/ancestor::div[@class='inventory_item']//button`).click();
        await this.page.locator("//a[@class='shopping_cart_link']").click();
        await expect(this.page.locator(`//div[@class='inventory_item_name' and text()='${productName}']`)).toBeVisible();
        await this.page.waitForTimeout(5000);
    }
}