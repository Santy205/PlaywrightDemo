// const { test, expect } = require('@playwright/test');

// test('working with multiple tabs', async ({browser }) => {
//     const context=await browser.newContext()
//     const page=await context.newPage()

//   await page.goto('https://freelance-learn-automation.vercel.app/login');

//   const [newPage]= await Promise.all([ ... ])

//   {
//     [
//         context.waitForEvent("page"),
//         page.locator("(//a[contains(@href,'facebook')])[1]").click()
//     ]
//   }
//   await newPage.locator("(//input[@name='email'])[2]").fill("mukeshgetMaxListeners.com")

// });
const { test, expect } = require('@playwright/test');

test('handle multiple tabs', async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('https://freelance-learn-automation.vercel.app/login');

  const [newPage] = await Promise.all([
    context.waitForEvent('page'), // wait for new tab
    page.click("(//a[contains(@href,'facebook')])[1]") // action that opens it
  ]);

  await newPage.waitForLoadState();

  await newPage.fill("//input[@name='email']", "test@example.com");
  await newPage.waitForTimeout(3000)
  await newPage.close()
  await page.locator("#email1").fill("abcd@gmail.com")

});
