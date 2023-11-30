import { Page, expect } from "@playwright/test";


export class CartPage {
    private readonly page: Page;
  
    constructor(page: Page) {
      this.page = page;
    }
  
    async clickContinueShoppingButton() {
      await this.page.click('text=Continue Shopping');
    }
  
    
  
    async clickViewCartButton() {
      await this.page.click('text=View Cart');
    }
  }
  