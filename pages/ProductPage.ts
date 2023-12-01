import { Page, expect } from "@playwright/test";

export class ProductPage {
  private readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async searchProduct(productName: string) {
    await this.page.getByPlaceholder("Search Product").fill(productName);
    await this.page.click('button[id="submit_search"]');
  }

  async addToCart(productName: string) {
    const productSelector = `text=${productName}`;
    await this.page.hover(productSelector);
    await this.page.click(`a.add-to-cart`);
  }
}
