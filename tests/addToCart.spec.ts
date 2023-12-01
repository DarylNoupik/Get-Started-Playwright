import test, { expect } from "@playwright/test";
import * as fs from "fs";
import { ProductPage } from "../pages/ProductPage";
import { HomePage } from "../pages/HomePage";
import { CartPage } from "../pages/CartPage";
import * as dotenv from "dotenv";

dotenv.config();

const baseUrl = process.env.BASE_URL;

const testDataFilePath = "./data/products.json";

test("Add to Cart (Data-Driven Tests from External file)", async ({ page }) => {
  const homePage = new HomePage(page);
  const productPage = new ProductPage(page);
  const cartPage = new CartPage(page);
  const products = JSON.parse(fs.readFileSync(testDataFilePath, "utf-8"));

  await homePage.navigate(baseUrl);
  await homePage.verifyHomePage();
  await homePage.Products();

  for (const product of products.products) {
    await productPage.searchProduct(product.name);
    await productPage.addToCart(product.name);
    await cartPage.clickContinueShoppingButton();
  }

  await cartPage.clickCartButton();

  for (const product of products.products) {
    await cartPage.verifyCartContainsText(product.name, products.expectedName);
  }
  // Assert whether no added product in the Cart contains the text ‘Yellow’
  await cartPage.verifyCartNotContainsText(products.UnexpectedName);
});
