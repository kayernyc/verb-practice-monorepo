import { test, expect } from '@playwright/test';

describe('Quiz', () => {
  test('successfully switches to German', async ({ page }) => {
    // Go to http://localhost:3000/
    await page.goto('http://localhost:3000/');
    // Click text=English to German
    await page.locator('text=English to German').click();
    // Click text=German to English

  });

  test('successfully switches languages', async ({ page }) => {
    // Go to http://localhost:3000/
    await page.goto('http://localhost:3000/');
    // Click text=English to German
    await page.locator('text=English to German').click();
    // Click text=German to English
    await page.locator('text=German to English').click();
    // Click input[type="text"]
    await page.locator('input[type="text"]').click();
    // Fill input[type="text"]
    await page.locator('input[type="text"]').fill('he is');
    // Click text=submit
    await page.locator('text=submit').click();
  });
});