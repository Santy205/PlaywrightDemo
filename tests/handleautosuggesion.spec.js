const { test, expect } = require('@playwright/test');
test.use({viewport:{width:1920,height:1080}})

// test('valid Application Title', async ({ page }) => {

//   await page.goto('https://www.google.com');

//   // Enter username
//   await page.locator("textarea[name='q']").fill("Mukesh Otwani");

//   // Enter password
//   await page.waitForSelector("//li[@role='presentation'] ")

//   await page.keyboard.press("ArrowDown")
  
//   await page.waitForTimeout(5000)

//   await page.keyboard.press("ArrowDown")
  
//   await page.waitForTimeout(5000)

//   await page.keyboard.press("Enter")

//   await page.waitForTimeout(10000)

// });

test('Autosuggesion Random select', async ({ page }) => {

  await page.goto('https://www.google.com');

  // Enter username
  await page.locator("textarea[name='q']").fill("Mukesh Otwani");

  // Enter password
  await page.waitForSelector("//li[@role='presentation'] ")

  const elements = await page.$$("//li[@role='presentation'] ")
  for(let i=0;i<elements.length;i++)
  {
    const text= await elements[i].textContent()
    if(text.includes('youtube'))
    {
        await elements[i].click()
        break
    }
    
}
    await page.waitForTimeout(6000)
});
