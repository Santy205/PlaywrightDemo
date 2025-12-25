
const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/loginpage');
const HomePage = require('../pages/homepage');

test('valid login1', async ({ page }) => {
  await page.goto('https://freelance-learn-automation.vercel.app/login');

  const loginPage = new LoginPage(page);  //created object
  await loginPage.loginToApp('admin@email.com', 'admin@123');
  const homepage=new HomePage(page)
  await homepage.VeryfyManageOption()
  await homepage.logoutfromApp()

});
