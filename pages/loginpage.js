class LoginPage {
  constructor(page) {
    this.page = page;
    this.emailInput = '#email1';
    this.passwordInput = "//input[@placeholder='Enter Password']";
    this.loginButton = "//button[text()='Sign in']";
  }

  async loginToApp(email, password) {
    await this.page.fill(this.emailInput, email);
    await this.page.fill(this.passwordInput, password);
    await this.page.click(this.loginButton);
  }
}

module.exports = LoginPage;
