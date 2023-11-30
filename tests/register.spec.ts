import { test,expect,Page  } from "@playwright/test";
import * as fs from 'fs';
import { HomePage } from "../pages/HomePage";
import { Signup } from "../pages/Signup";


const testDataFilePath = './data/datasets.json';

test('UI Test 1 - Register User',async ({page})=>{
   
    const datasets =JSON.parse(fs.readFileSync(testDataFilePath,'utf-8'));
    const homePage = new HomePage(page);
    const signupPage = new Signup(page);

    //Etapes 
    await homePage.navigate('https://www.automationexercise.com');
    await homePage.verifyHomePage();
    await homePage.SignUplogin();


    await signupPage.verifyNewUserSignUp();
    await signupPage.enterNameAndEmail(datasets.name,datasets.email);
    await signupPage.clickSignupButton();

    await signupPage.verifyAccountInformation();
    await signupPage.fillAccountDetails(datasets);
    await signupPage.clickCreateAccountButton();

    await signupPage.verifyAccountCreated();

    
});
