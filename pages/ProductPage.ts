import { Page, expect } from "@playwright/test";

export class ProductPage {
    private readonly page: Page;
  
    constructor(page: Page) {
      this.page = page;
    }
  
    async addToCart(productIndex: number) {
      const productSelector = `.product:nth-child(${productIndex})`;
      await this.page.hover(productSelector);
      await this.page.click(`${productSelector} button[data-testid="add-to-cart"]`);
    }
  }