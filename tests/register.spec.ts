import { test, expect, Page } from "@playwright/test";
import * as fs from "fs";
import { HomePage } from "../pages/HomePage";
import { Signup } from "../pages/Signup";

import * as dotenv from "dotenv";

dotenv.config();

const testDataFilePath = "./data/datasets.json";

test("UI Test 1 - Register User", async ({ page }) => {
  const datasets = JSON.parse(fs.readFileSync(testDataFilePath, "utf-8"));
  const baseUrl = process.env.BASE_URL;
  const homePage = new HomePage(page);
  const signupPage = new Signup(page);

  //Etapes
  await homePage.navigate(baseUrl);
  await homePage.verifyHomePage();
  await homePage.SignUplogin();

  await signupPage.verifyNewUserSignUp();
  await signupPage.enterNameAndEmail(datasets.name, datasets.email);
  await signupPage.clickSignupButton();

  await signupPage.verifyAccountInformation();
  await signupPage.fillAccountDetails(datasets);
  await signupPage.clickCreateAccountButton();

  await signupPage.verifyAccountCreated();
});
