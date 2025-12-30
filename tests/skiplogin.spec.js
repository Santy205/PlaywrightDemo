const { test, expect } = require('@playwright/test');

test.use({viewport:{width:1366,height:768}})

test('skip login', async ({ page, context }) => {

  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');

  await page.waitForLoadState('networkidle')
 

});
