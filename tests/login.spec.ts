import { expect, test } from "@playwright/test";
import * as fs from "fs";
import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";
import * as dotenv from "dotenv";

dotenv.config();

const baseUrl = process.env.BASE_URL;

const testDataFilePath = "./data/login.json";

test("Invalid scenario Login", async ({ page }) => {
  const login = JSON.parse(fs.readFileSync(testDataFilePath, "utf-8"));
  const homePage = new HomePage(page);
  const loginPage = new LoginPage(page);

  await homePage.navigate(baseUrl);
  await homePage.verifyHomePage();
  await homePage.SignUplogin();

  await loginPage.verifyLogIn();
  await loginPage.enterPassword(login.email, login.invalidPassword);
  await loginPage.verifyLoginFailure();
});

test("Valid scenario Login", async ({ page }) => {
  const login = JSON.parse(fs.readFileSync(testDataFilePath, "utf-8"));
  const homePage = new HomePage(page);
  const loginPage = new LoginPage(page);

  await homePage.navigate(baseUrl);
  await homePage.verifyHomePage();
  await homePage.SignUplogin();

  await loginPage.verifyLogIn();
  await loginPage.enterPassword(login.email, login.validPassword);
  await loginPage.verifyLoginSuccess(login.name);
});
