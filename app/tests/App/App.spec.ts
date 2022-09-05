import { test, expect } from '@playwright/test';

test('Title is correct', async ({ page }) => {
  await page.goto('localhost:3000');
  await expect(page).toHaveTitle(/Verb Practice/);
});

test('element has id of root', async ({ page }) => {
  // TODO: inject test url from env
  await page.goto('localhost:3000');
  const root = page.locator('#root')
  await expect(root).not.toBeNull();
});