# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: loginEmailID.spec.ts >> @sanity Login my account with correct password
- Location: tests\loginEmailID.spec.ts:23:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.fill: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('button', { name: 'Login' }).nth(14)

```

# Page snapshot

```yaml
- main [ref=e9]:
  - generic [ref=e10]:
    - generic [ref=e14]:
      - generic [ref=e15]: Integrative & personalised mental well-being
      - generic [ref=e16]: Accessible, specialised integrative mental healthcare in seconds.
    - generic [ref=e17]:
      - generic [ref=e20] [cursor=pointer]:
        - generic [ref=e21]:
          - combobox [ref=e23]
          - generic "English" [ref=e24]
        - generic:
          - img:
            - img
      - generic [ref=e27]:
        - img [ref=e28]
        - heading "Login to your account" [level=3] [ref=e29]
        - generic [ref=e30]:
          - generic [ref=e32]:
            - generic [ref=e34]:
              - generic [ref=e37]: Email ID *
              - textbox "Email ID *" [disabled] [ref=e41]: kokila.velsamy@gmail.com
            - generic [ref=e42] [cursor=pointer]:
              - img [ref=e43]
              - generic [ref=e44]: Edit
            - generic [ref=e45]:
              - generic [ref=e47]:
                - generic [ref=e50]: Password *
                - generic [ref=e54] [cursor=pointer]:
                  - textbox "Password *" [active] [ref=e55]
                  - img [ref=e57]
              - generic [ref=e59]:
                - generic [ref=e64]: Forgot Password?
                - button "Login" [ref=e66] [cursor=pointer]
          - generic [ref=e68]:
            - generic [ref=e70]: Don't have an account?
            - generic [ref=e71]: Sign up
```

# Test source

```ts
  1   | import{Page,Locator} from "@playwright/test"
  2   | export class Homepage{
  3   |     private readonly page:Page;
  4   |     //locators
  5   |     private readonly login_btn:Locator;
  6   |     private readonly email_id_btn:Locator;
  7   |     private readonly email_id_input:Locator;
  8   |     private readonly emailid_continue:Locator;
  9   |     private readonly login_with_password_btn:Locator;
  10  |     private readonly password_field:Locator;
  11  |     private readonly login_btn_final:Locator
  12  |     
  13  |     constructor(page:Page)
  14  |     {
  15  |         this.page =page
  16  |         //locator for Login button - Which is located in landing screen
  17  |         this.login_btn=page.getByRole('button', { name: 'Login' }) 
  18  |         //loctor for email id field
  19  |         this.email_id_btn=page.getByRole('textbox', { name: 'Enter your email id' })
  20  |         //locator for 
  21  |         this.email_id_input=page.getByRole('textbox', { name: 'Enter your email id' })
  22  |         //locator for  continue button - After filled email id continue button will show
  23  |         this.emailid_continue=page.getByRole('button',{name:'Continue'})
  24  |         //locator  for login with password button
  25  |         this.login_with_password_btn=page.getByRole('button',{name:'Login with password'})
  26  |         //locator for password input field
  27  |         this.password_field=page.getByRole('button',{name:'Login'}).nth(14);
  28  |         //  Login button which is came after entered valid emal id and valid password
  29  | 
  30  | 
  31  |      
  32  |     }
  33  |     async click_my_login()
  34  |     {
  35  |         try{
  36  |             await this.login_btn.click();
  37  | 
  38  |         }
  39  |         catch(error){
  40  |             console.log('Error while click login button:',{error});
  41  |             throw error;
  42  | 
  43  |         }
  44  |     }
  45  |     async clickmy_emailid()
  46  |     {
  47  |         try{
  48  |             await this.email_id_btn.click();
  49  |         }
  50  |         catch(error){
  51  |             console.log('Error while clikcing email id button',{error});
  52  |             throw error;
  53  | 
  54  |         }
  55  |         
  56  |     }
  57  |     async setMyEmail(email:string):Promise<void>
  58  |     {
  59  |         await this.email_id_input.fill(email);
  60  |     }
  61  |     async click_emailid_continue(){
  62  |         try{
  63  |             await this.emailid_continue.click();
  64  |         }
  65  |         catch(error){
  66  |             console.log("Error while clicking contineu button",{error})
  67  |             throw error;
  68  | 
  69  |         }
  70  | 
  71  |     }
  72  |     async click_login_with_password_btn(){
  73  |         try{
  74  |             await this.login_with_password_btn.click();
  75  |         }
  76  |         catch(error){
  77  |             console.log('Error while clicking login with password button',{error})
  78  |             throw error;
  79  | 
  80  |         }
  81  |     }
  82  |     async set_password_input_field(password:string):Promise<void>{
  83  |         
> 84  |             await this.password_field.fill(password);
      |                                       ^ Error: locator.fill: Test timeout of 30000ms exceeded.
  85  |         
  86  |     }
  87  |     async click_login_btn_final()
  88  |     {
  89  |         try{
  90  |             await this.login_btn_final.click();
  91  |         }
  92  |             catch(error){
  93  |                 console.log('Error while clicking with login button',{error})
  94  |                 throw error
  95  |             }
  96  |     }
  97  | 
  98  | 
  99  |     
  100 | }
```