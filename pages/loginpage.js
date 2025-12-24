class LoginPage {
  constructor(page) {
    this.page = page;
    this.emailInput = '#email1';   //id 
    this.passwordInput = "//input[@placeholder='Enter Password']";  //xpath
    this.loginButton = "//button[text()='Sign in']";                //xpath
  }

  async loginToApp(email, password) {
    await this.page.fill(this.emailInput, email);
    await this.page.fill(this.passwordInput, password);
    await this.page.click(this.loginButton);
  }
}

module.exports = LoginPage;
