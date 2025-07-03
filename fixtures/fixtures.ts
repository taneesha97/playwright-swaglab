import { test as base, expect } from "@playwright/test";
import { LoginPage } from "../src/pages/loginPage";
import { ProductPage } from "../src/pages/productPage";
import { CheckoutPage } from "../src/pages/checkoutPage";

type PageFixtures = {
    loginPage: LoginPage;
    productPage: ProductPage;
    checkoutPage: CheckoutPage;
};

const testpages = base.extend<PageFixtures>({
    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        await use(loginPage);
    },
    productPage: async ({ page }, use) => {
        const productPage = new ProductPage(page);
        await use(productPage);
    },
    checkoutPage: async ({ page }, use) => {
        const checkoutPage = new CheckoutPage(page);
        await use(checkoutPage);
    },
});

export const test = testpages;
export { expect };