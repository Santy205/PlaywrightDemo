// const{test,expect}= require('@playwright/test')
// test("valid login",async function ({page}) {
//     await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
// })
const { test, expect } = require('@playwright/test');
test.use({viewport:{width:1920,height:1080}})

test('valid login', async ({ page }) => {

  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  // Enter username
  await page.fill('input[name="username"]', 'Admin');

  // Enter password
  await page.fill('input[name="password"]', 'admin123');

  // Click login
  await page.click('button[type="submit"]');

  await page.waitForTimeout(5000)

  // Assertion: Dashboard should be visible
  await expect(page.locator('h6.oxd-text')).toHaveText('Dashboard');
});
