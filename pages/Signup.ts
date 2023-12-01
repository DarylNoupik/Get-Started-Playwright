import { Page, expect } from "@playwright/test";

export class Signup {
    private readonly page: Page;

    constructor(page: Page) {
      this.page = page;
    }
 async verifyNewUserSignUp(){
    const textElement = await this.page.locator('text=New User SignUp');
    // Vérifier si l'élément est visible
    const isTextVisible = await textElement.isVisible();
    // Effectuer une assertion
    expect(isTextVisible).toBe(true);   
 }
 async enterNameAndEmail(name: string, email: string) {
    await this.page.fill('input[name="name"]', name);
    await this.page.fill('input[data-qa="signup-email"]', email);
  }
async clickSignupButton() {
    await this.page.click('button[data-qa="signup-button"]');
  }
  async verifyAccountInformation() {
    const textElement2 = await this.page.locator('text=ENTER ACCOUNT INFORMATION');
    const isTextVisible2 = await textElement2.isVisible();
    expect(isTextVisible2).
    toBe(true); 
  }

  async fillAccountDetails(details: any) {
    //  details: Title, Name, Email, Password, Date of birth
    await this.page.check('input[id="id_gender1"]');
    await this.page.fill('input[name="name"]', details.name);
    //await this.page.fill('input[name="email"]', details.email);
    await this.page.fill('input[name="password"]', details.password);
    console.log(details.dob.day);
    
    await this.page.locator('#days').selectOption(details.dob.day);
    await this.page.locator('#months').selectOption(details.dob.month);
    await this.page.locator('#years').selectOption(details.dob.year);
  

    // Select checkboxes
    await this.page.check('input[name="newsletter"]');
    await this.page.check('input[name="optin"]');

    // Fill additional details
    await this.page.fill('input[name="first_name"]', details.firstName);
    await this.page.fill('input[name="last_name"]', details.lastName);
    await this.page.fill('input[name="company"]', details.company);
    await this.page.fill('input[name="address1"]', details.address);
    await this.page.fill('input[name="address2"]', details.address2);
    await this.page.locator('#country').selectOption(details.country);
    await this.page.fill('input[name="state"]', details.state);
    await this.page.fill('input[name="city"]', details.city);
    await this.page.fill('input[name="zipcode"]', details.zipcode);
    await this.page.fill('input[name="mobile_number"]', details.mobileNumber);
  }

  async clickCreateAccountButton() {
    await this.page.click('button[data-qa="create-account"]');
  }

  async verifyAccountCreated() {
    const textElement = await this.page.locator('text=ACCOUNT CREATED!');
    const isTextVisible = await textElement.isVisible();
    expect(isTextVisible).toBe(true); 
  }
}