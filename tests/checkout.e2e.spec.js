import { test, expect } from '@playwright/test';

test('User can complete checkout flow with 3 random items', async ({ page }) => {
  // Navigate to SauceDemo
  await page.goto('https://www.saucedemo.com/');

  // Login
  await page.fill('[data-test="username"]', 'standard_user');
  await page.fill('[data-test="password"]', 'secret_sauce');
  await page.click('[data-test="login-button"]');

  // Verify inventory page is loaded
  await expect(page.locator('.inventory_list')).toBeVisible();

  // Select 3 random products
  const products = page.locator('.inventory_item');
  const productCount = await products.count();

  const selectedIndexes = new Set();
  while (selectedIndexes.size < 3) {
    selectedIndexes.add(Math.floor(Math.random() * productCount));
  }

  for (const index of selectedIndexes) {
    await products.nth(index).locator('button').click();
  }

  // Open cart
  await page.click('.shopping_cart_link');

  // Assert 3 items are added to cart
  await expect(page.locator('.cart_item')).toHaveCount(3);

  // Proceed to checkout
  await page.click('[data-test="checkout"]');

  // Fill checkout information
  await page.fill('[data-test="firstName"]', 'Amay');
  await page.fill('[data-test="lastName"]', 'Kalal');
  await page.fill('[data-test="postalCode"]', '560001');
  await page.click('[data-test="continue"]');

  // Complete checkout
  await page.click('[data-test="finish"]');

  // Verify order confirmation
  await expect(page.locator('.complete-header')).toHaveText(
    'Thank you for your order!'
  );
});