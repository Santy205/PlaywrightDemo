const{test,expect, chromium}= require('@playwright/test')
test("wait for load state",async function ({page}) {
    await page.goto("https://freelance-learn-automation.vercel.app/login")
    await page.getByText("New User? Signup").click()
    await page.waitForLoadState("networkidle")
    const count=await page.locator("//input[@type='checkbox']").count()
    await page.waitForTimeout(2000)

    //expect(count).toBe(14)
    
})
// checking