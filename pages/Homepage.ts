import{Page,Locator} from "@playwright/test"
export class Homepage{
    private readonly page:Page;
    //locators
    private readonly login_btn:Locator;
    private readonly email_id_btn:Locator;
    private readonly email_id_input:Locator;
    
    constructor(page:Page)
    {
        this.page =page
        this.login_btn=page.getByRole('button', { name: 'Login' }) 
        this.email_id_btn=page.getByRole('textbox', { name: 'Enter your email id' })
        this.email_id_input=page.getByRole('textbox', { name: 'Enter your email id' })
     
    }
    async click_my_login()
    {
        try{
            await this.login_btn.click();

        }
        catch(error){
            console.log('Error while click login button:',{error});
            throw error;

        }
    }
    async clickmy_emailid()
    {
        try{
            await this.email_id_btn.click();
        }
        catch(error){
            console.log('Error while clikcing email id button',{error});
            throw error;

        }
        
    }
    async setMyEmail(email:string):Promise<void>
    {
        await this.email_id_input.fill(email);
    }


    
}