import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.facebook.com/');
  await page.getByRole('img', { name: 'Facebook' }).click();
  await page.getByTestId('royal-email').click();
  await page.getByTestId('royal-email').fill('singhsanty143@gmail.com');
  await page.getByTestId('royal-pass').click();
  await page.getByTestId('royal-pass').fill('gungunji143...');
  await page.getByTestId('royal-login-button').click();
  await page.goto('https://www.facebook.com/');
  await page.getByRole('link', { name: 'SanTy SinGh', exact: true }).click();
  await page.goto('https://www.facebook.com/singhsanty143');
});