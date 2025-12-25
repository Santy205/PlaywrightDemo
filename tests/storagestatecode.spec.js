const { test, expect } = require('@playwright/test');

test.use({ viewport: { width: 1920, height: 1080 } });

test('valid login and save session', async ({ page, context }) => {

  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  await page.fill('input[name="username"]', 'Admin');
  await page.fill('input[name="password"]', 'admin123');
  await page.click('button[type="submit"]');

  // wait until dashboard loads
  await page.waitForURL(/dashboard/);

  // verify successful login
  await expect(page.getByRole('headng', { name: 'Dashboard' })).toBeVisible();

  // save auth state
  await context.storageState({
    path: 'testdata/authentication.json'
  });
});
i