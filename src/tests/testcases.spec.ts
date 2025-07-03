import { test, expect } from "../../fixtures/fixtures";
import { CheckoutPage } from "../pages/checkoutPage";

// test('Login to the application', async ({ page }) => {
//   // 1. Go to the login page
//   await page.goto('https://www.saucedemo.com/');

//   // 2. Fill in login form
//   await page.fill('#user-name', 'standard_user');
//   await page.fill('#password', 'secret_sauce');

//   // 3. Click login button
//   await page.click('#login-button');

//   // 4. Verify that the user is logged in
//   await expect(page.getByText('Products')).toBeVisible();

//   const productName = "Sauce Labs Fleece Jacket";
//   await page.locator(`//div[@class='inventory_item_name ' and text()='${productName}']/ancestor::div[@class='inventory_item']//button`).click();
//   await page.waitForTimeout(1000);

//   // 5. Click cart icon
//   await page.locator("//a[@class='shopping_cart_link']").click();
//   await page.waitForTimeout(1000);

//   // 6. verify item is added to the cart
//   await expect(page.locator(`//div[@class='inventory_item_name' and text()='${productName}']`)).toBeVisible();
// });

test('Add product to cart', async ({ loginPage, productPage, checkoutPage }) => {
    const productName = "Sauce Labs Fleece Jacket";
    const confirmMsg = "Thank you for your order!";
    const confirmMsgDescription = "Your order has been dispatched, and will arrive just as fast as the pony can get there!";

    await test.step('Log in to application', async () => {
        await loginPage.openApplication('https://www.saucedemo.com/');
        await loginPage.login('standard_user', 'secret_sauce');
    });

    await test.step('Add product to cart', async () => {
        await productPage.addProductToCart(productName);
        await checkoutPage.openCheckoutPage('Anna', 'Doe', '123');
    });

    await test.step('Complete Order', async () => {
        await checkoutPage.checkoutConfirmation(productName);
        await checkoutPage.orderCompletion(confirmMsg, confirmMsgDescription);
    });

});
