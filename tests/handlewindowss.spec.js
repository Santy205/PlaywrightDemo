// // const { test, expect } = require('@playwright/test');

// // test('working with multiple tabs', async ({browser }) => {
// //     const context=await browser.newContext()
// //     const page=await context.newPage()

// //   await page.goto('https://freelance-learn-automation.vercel.app/login');

// //   const [newPage]= await Promise.all([ ... ])

// //   {
// //     [
// //         context.waitForEvent("page"),
// //         page.locator("(//a[contains(@href,'facebook')])[1]").click()
// //     ]
// //   }
// //   await newPage.locator("(//input[@name='email'])[2]").fill("mukeshgetMaxListeners.com")

// // });
// //test is used to define a test case.
// //expect is used for assertions (not used in this example).
// const { test, expect } = require('@playwright/test'); 
// // Creates a test named “handle multiple tabs”.
// //browser is provided by Playwright’s test runner.
// test('handle multiple tabs', async ({ browser }) => {
//   const context = await browser.newContext(); //browser.newContext() creates an isolated browser session.
//   const page = await context.newPage();//context.newPage() opens the first browser tab.
//   await page.goto('https://freelance-learn-automation.vercel.app/login');//context.newPage() opens the first browser tab.
// //Clicking the Facebook link opens a new tab.
// //context.waitForEvent('page') waits for the new tab.
// //Promise.all() ensures Playwright waits for the tab and performs the click simultaneously.
// //newPage represents the newly opened tab.
//   const [newPage] = await Promise.all([
//     context.waitForEvent('page'), // wait for new tab
//     page.click("(//a[contains(@href,'facebook')])[1]") // action that opens it
//   ]);
// //Ensures the new tab is fully loaded before interaction.
//   await newPage.waitForLoadState();
// //Enters an email value in the Facebook login page.
//   await newPage.fill("//input[@name='email']", "test@example.com");
//   await newPage.waitForTimeout(3000)
//   await newPage.close()
//   await page.locator("#email1").fill("abcd@gmail.com")

// });
