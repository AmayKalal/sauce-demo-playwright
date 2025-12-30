import { test, expect } from '@playwright/test';

test('SauceDemo login page loads', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await expect(page.locator('[data-test="login-button"]')).toBeVisible();
});