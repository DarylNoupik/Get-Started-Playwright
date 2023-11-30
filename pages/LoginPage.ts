import { Page, expect } from "@playwright/test";

export class LoginPage {
    private readonly page: Page;
  
    constructor(page: Page) {
      this.page = page;
    }
  
    async enterPassword(email: string, Password: string) {
      await this.page.fill('input[data-qa="login-email"]', email);
      await this.page.fill('input[name="password"]', Password);
      await this.page.click('button[data-qa="login-button"]');
    }
  
    
    async verifyLogIn(){
        const textElement = await this.page.locator('text=Login to your account');
        const isTextVisible = await textElement.isVisible();
        expect(isTextVisible).toBe(true);   
     }

    async verifyLoginFailure() {
        const textElement = await this.page.locator('text=Your email or password is');
        const isTextVisible = await textElement.isVisible();
        expect(isTextVisible).toBe(true); 
    }
  
    async verifyLoginSuccess(username: string) {
      const loggedInText = await this.page.textContent(`text=Logged in as ${username}`);
      expect(loggedInText).toContain(`Logged in as ${username}`);
    }
  }