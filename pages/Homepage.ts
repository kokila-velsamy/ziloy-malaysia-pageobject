import{Page,Locator, expect} from "@playwright/test"
export class Homepage{
    private readonly page:Page;
    //locators
    private readonly login_btn:Locator;
    private readonly email_id_btn:Locator;
    private readonly email_id_input:Locator;
    private readonly emailid_continue:Locator;
    private readonly login_with_password_btn:Locator;
    private readonly password_input:Locator;
    private readonly login_btn_final:Locator
    private readonly loggedin_success:Locator
    
    constructor(page:Page)
    {
        this.page =page
        //locator for Login button - Which is located in landing screen
        this.login_btn=page.getByRole('button', { name: 'Login' }) 
        //loctor for email id field
        this.email_id_btn=page.getByRole('textbox', { name: 'Enter your email id' })
        //locator for 
        this.email_id_input=page.getByRole('textbox', { name: 'Enter your email id' })
        //locator for  continue button - After filled email id continue button will show
        this.emailid_continue=page.getByRole('button',{name:'Continue'})
        //locator  for login with password button
        this.login_with_password_btn=page.getByRole('button',{name:'Login with password'})
        //locator for password input field
        this.password_input=page.locator('#passwordlogin_password')
        //  Login button which is came after entered valid emal id and valid password
        this.login_btn_final= page.getByRole('button', { name: 'Login' })

         // assertion  - logged in success
        this.loggedin_success=page.locator('div').filter({ hasText: 'Logged in successfully!' }).nth(4)


     
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
    async click_emailid_continue(){
        try{
            await this.emailid_continue.click();
        }
        catch(error){
            console.log("Error while clicking contineu button",{error})
            throw error;

        }

    }
    async click_login_with_password_btn(){
        try{
            await this.login_with_password_btn.click();
        }
        catch(error){
            console.log('Error while clicking login with password button',{error})
            throw error;

        }
    }
    async set_password_input_field(password:string):Promise<void>{
        
            await this.password_input.fill(password);
        
    }
    async click_login_btn_final()
    {
        try{
            await this.login_btn_final.click();
        }
            catch(error){
                console.log('Error while clicking with login button',{error})
                throw error
            }
    }
    
    async loggedin_success_validator():Promise<void>{
        try{
            expect(await this.loggedin_success).toBeVisible()
        }
       catch(error){
                console.log('Logged in Success validator not received',{error})
                throw error
            }
    }


    
}