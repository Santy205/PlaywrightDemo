// const { test, expect } = require('@playwright/test');
// test.use({viewport:{width:1920,height:1080}})
// test("select value from dropdown", async function({page}) 
// {
//     await page.goto("https://freelance-learn-automation.vercel.app/signup")
//     await page.locator("#state").selectOption({lable:"Goa"})
//     await page.waitForTimeout(5000)
//     await page.locator("#state").selectOption({value:"Himachal Pradesh"})

//     await page.waitForTimeout(5000)   
//     await page.locator("#state").selectOption({index:4}) 
//     const value = await page.locator("#state").textContent()
//     console.log("all values are "+value)

// })