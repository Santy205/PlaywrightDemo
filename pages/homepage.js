const {expect} = require("@playwright/test")

class HomePage {
  constructor(page) 
  {
    this.page = page;
    this.manageoption="//span[normalize-space()='Manage']";
    this.menu = "//img[@alt='menu']";   //xpath 
    this.logoutoption = "//button[normalize-space()='Sign out']";  //xpath
  }

  async VeryfyManageOption()
  {
    await expect(this.page.locator(this.manageoption)).toBeVisible()

  }

  async logoutfromApp() 
  {
    await this.page.click(this.menu);
    await this.page.click(this.logoutoption);
  }
}

module.exports = HomePage;
