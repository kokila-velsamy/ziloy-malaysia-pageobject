
import{test,expect}from '@playwright/test';
import { Testconfig } from '../testconfig';
import { Homepage } from '../pages/Homepage';
import { Randomdatautils } from '../utils/randomDataGenerator';
//Variable to  create object for the class files
let config:Testconfig;
let homepage:Homepage;

test.beforeEach("Launch url",async({page})=>{
    //object creation
    config=new Testconfig();
    homepage=new Homepage(page);

    await page.goto(config.appurl);
})

 test.afterEach(async({page})=>{
    await page.waitForTimeout(2000);
    
 })

test('@sanity Login my account with correct password', async({page})=>{
    await homepage.click_my_login();
    await homepage.clickmy_emailid();
    await homepage.setMyEmail(config.email);
    await homepage.click_emailid_continue();
    await homepage.click_login_with_password_btn();
    await homepage.set_password_input_field(config.password);
    await homepage.click_login_btn_final()
    
    //assertion
    await homepage.loggedin_success_validator();
   
})

test('@negative Logged in account with correct email id and incorrect password',async({page})=>{
    await homepage.click_my_login();
    await homepage.clickmy_emailid();
    await homepage.setMyEmail(config.email);
    await homepage.click_emailid_continue();
    await homepage.click_login_with_password_btn();
    await homepage.set_password_input_field(config.invalid_password);
     await homepage.click_login_btn_final()

})
