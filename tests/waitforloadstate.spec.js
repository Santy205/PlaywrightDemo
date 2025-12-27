const{test,expect}= require('@playwright/test')
test("wait for load state",async function ({page}) {
    await page.goto("https://freelance-learn-automation.vercel.app/login")
    await page.getByText("New User? Signup").click()
    await page.waitForLoadState("networkidle")
    const count=await page.locator("//input[@type='checkbox']").count()
    await page.waitForLoadState("networkidle")

    expect(count).toBe(4)
})
// checking