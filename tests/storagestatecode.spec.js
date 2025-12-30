const { test, expect } = require('@playwright/test');

test.use({viewport:{width:1366,height:768}})

test('valid login', async ({ page, context }) => {

  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  await page.fill('input[name="username"]', 'Admin');
  await page.fill('input[name="password"]', 'admin123');
  await page.click('button[type="submit"]');

  // ✅ wait for successful login (better than timeout)
  await page.waitForURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');

  // ✅ save storage state (IMPORTANT: use await)
  await context.storageState({
    path: 'testdata/authentication.json'
  });

});
