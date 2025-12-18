const { test, expect } = require('@playwright/test');
test.use({viewport:{width:1920,height:1080}})

test('mouse action', async ({ page }) => {
  await page.goto('https://freelance-learn-automation.vercel.app/login');

  await page.getByRole('textbox', { name: 'Enter Email' }).fill('admin@email.com');
  await page.getByRole('textbox', { name: 'Enter Email' }).fill('admin"email.com');

  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.locator("//span[text()='manage']").hover({force:true}) //“Trigger the hover event even if the 
  // element is not considered interactable (hidden, covered, off-screen, or disabled).”
  await page.locator("//a[normalize-space()='manage Coueses']").click()



});