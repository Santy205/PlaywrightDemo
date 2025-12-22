const { test, expect } = require('@playwright/test');
const testdata = require('../testdata.json');     //for json file

test('data driven json', async ({ page }) => {
  await page.goto('https://freelance-learn-automation.vercel.app/login');

  await page.locator('#email1').fill(testdata.interest[0]);
  await page.locator('#password1').fill(testdata.password);

  //await page.pause();
});
// const{test,expect}= require('@playwright/test')
// const testdata= JSON.parse(JSON.stringify(require("../testdata.json")))
// test("data driven jason",async function ({page}) {
//     await page.goto("https://freelance-learn-automation.vercel.app/login")
//     await page.locator("//input[@id='email']").type(testdata.username)
//     await page.locator("//input[@id='password1']").type(testdata.pasword)
//     await page.pause()

// })