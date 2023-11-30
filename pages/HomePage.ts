import { Page, expect } from "@playwright/test";

export class HomePage {

    private page :Page;
//Constructeur par defaut de la page 
    constructor(page:Page){
        this.page = page ;
    }
//Fonction pour se naviga
    async navigate(url:string) {
        await this.page.goto(url);
    }
//Verification de la page d'acceuil
    async verifyHomePage() {
        expect(this.page).toHaveTitle(/Automation Exercise/);
      }
//Click sur la page login
    async SignUplogin(){
        await this.page.click('text=Signup / Login');
    }
//Click sur Product
    async Products (){
        await this.page.click('text=Products');
    }

}