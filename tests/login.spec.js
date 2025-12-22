// const{test,expect}= require('@playwright/test')
// test("valid login",async function ({page}) {
//     await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
// })
const { test, expect } = require('@playwright/test');
test.use({viewport:{width:1920,height:1080}})

test('valid login', async ({ page }) => {

  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  await page.fill('input[name="username"]', 'Admin');

  await page.fill('input[name="password"]', 'admin123');

  await page.click('button[type="submit"]');

  await page.waitForTimeout(5000);

  // Assertion: Dashboard should be visible
  await expect(page.locator('h6.oxd-text')).toHaveText('Dashboard');
  await page.click('span:has-text("My Info")');
  await page.locator("//div[@class='orangehrm-horizontal-padding orangehrm-vertical-padding']//div[@class='oxd-grid-3 orangehrm-full-width-grid']//div[1]//div[1]//div[2]//div[1]//div[1]//div[2]//i[1]").click();
  await page.locator(':text("Chinese")').click();
  await page.locator('input[name="firstName"]').fill('abc');
  await page.locator('input[name="middleName"]').fill('abc');
  await page.locator('input[name="lastName"]').fill('abc');


});
