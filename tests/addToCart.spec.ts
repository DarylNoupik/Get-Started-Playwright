import test from "@playwright/test";
import { ProductPage} from "../pages/ProductPage";
import { HomePage } from "../pages/HomePage";
import { CartPage } from "../pages/CartPage";

test('Add to Cart (Data-Driven Tests from External file)',async({page})=>{
    
    const homePage    = new HomePage(page);
    const productPage = new ProductPage(page);
    const cartPage    = new CartPage(page);

    homePage.navigate('https://automationexercise.com');
    homePage.verifyHomePage();
    homePage.Products();

    await page.locator('div:nth-child(4) > .product-image-wrapper > .single-products > .product-overlay > .overlay-content > .btn').click()
    await page.pause();

})
