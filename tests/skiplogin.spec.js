const { test, expect } = require('@playwright/test');

test.use({ viewport: { width: 1920, height: 1080 } });

test('skip login', async ({ page, context }) => {

  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');

  await page.waitForLoadState('networkidle')
 

});
