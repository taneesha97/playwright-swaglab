# 🧪 Playwright SauceDemo Project

This project automates end-to-end testing of the [SauceDemo](https://www.saucedemo.com) web application using **Playwright** and **TypeScript**. It covers the full user journey: login, adding products to cart, checkout, and verifying the success message.

---

## 🚀 Features

- ✅ Login with valid credentials
- 🛒 Add specific product to cart (e.g., *Sauce Labs Fleece Jacket*)
- 🧾 Proceed through checkout (First Name, Last Name, Postal Code)
- 📦 Verify checkout success message: *"Thank you for your order!"*
- 📊 Allure reporting integration for beautiful, shareable test results
- 🔁 Test step reporting using `test.step()` blocks
- 📂 Follows Page Object Model (POM) design for clean separation

---

## 📁 Folder Structure
.
├── src/
│ ├── pages/ # Page Object Models
│ │ ├── LoginPage.ts
│ │ ├── ProductPage.ts
│ │ └── CheckoutPage.ts
│ ├── tests/ # Test files
│ │ └── checkout.test.ts
│ └── test-results/ # Playwright test output
├── playwright.config.ts # Playwright global config
├── .gitignore
├── README.md
└── package.json
