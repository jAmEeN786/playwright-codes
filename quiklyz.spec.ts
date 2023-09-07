import { chromium,expect,test,Page } from "@playwright/test";
test.describe.configure({ mode: 'serial' });
test.use({
    viewport:{
        width: 1024,
        height:768
    }
})
/*test ('user',async ({page}) =>
{
    await page.goto("https://uat.quiklyz.com/");
    await page.getByText('Chennai', { exact: true }).click();
    await page.getByRole('button', { name: 'Login ' }).click();
    await page.getByRole('menuitem', { name: 'New user? Start here' }).click();
    await page.getByRole('textbox', { name: 'First Name' }).fill('mohamed');
    await page.getByRole('textbox', { name: 'Last Name' }).fill('jameen');
    await page.getByRole('textbox', { name: 'Email Address' }).fill('mohamedjameen.h@finezoom.com');
    await page.getByRole('textbox', { name: 'Enter your Mobile Number' }).fill('9159799044');
    await page.locator('.mat-checkbox-inner-container').first().check();
    await page.getByRole('button', { name: 'Edit Record' }).click();
    console.log('OTP sent');
    await page.locator('fg-custom-container').filter({ hasText: 'home keyboard_arrow_right LoginHere\'s how you can lease a carWith a subscription' }).locator('#otpField-0').fill('1');
    await page.locator('fg-custom-container').filter({ hasText: 'home keyboard_arrow_right LoginHere\'s how you can lease a carWith a subscription' }).locator('#otpField-1').fill('2');
    await page.locator('fg-custom-container').filter({ hasText: 'home keyboard_arrow_right LoginHere\'s how you can lease a carWith a subscription' }).locator('#otpField-2').fill('3');
    await page.locator('fg-custom-container').filter({ hasText: 'home keyboard_arrow_right LoginHere\'s how you can lease a carWith a subscription' }).locator('#otpField-3').fill('4');
    await page.locator('fg-custom-container').filter({ hasText: 'home keyboard_arrow_right LoginHere\'s how you can lease a carWith a subscription' }).locator('#otpField-4').fill('5');
    await page.locator('fg-custom-container').filter({ hasText: 'home keyboard_arrow_right LoginHere\'s how you can lease a carWith a subscription' }).locator('#otpField-5').fill('6');
    await page.getByRole('button', { name: 'Continue' }).click();
    console.log('user registered successfully');
    await page.pause();
}

);*/

/*const myTest = test.extend({
    webApp : async ({page},use) =>{
        branch codes
    await use(page);
    }
})*/
/*test('login', async ({page}) =>
{   
    await page.goto("https://uat.quiklyz.com/");
    await page.getByText('Chennai', { exact: true }).click();
    await page.getByRole('button', { name: 'Login ' }).click();
    await page.getByRole('button', { name: 'Login', exact: true }).click();
    await page.getByRole('textbox', { name: 'Enter Mobile Number' }).fill('7639359309');
    await page.getByRole('button', { name: 'Get OTP' }).click();
    await page.locator('fg-custom-container').filter({ hasText: 'home keyboard_arrow_right LoginHere\'s how you can lease a carWith a subscription' }).locator('#otpField-0').fill('1');
    await page.locator('fg-custom-container').filter({ hasText: 'home keyboard_arrow_right LoginHere\'s how you can lease a carWith a subscription' }).locator('#otpField-1').fill('2');
    await page.locator('fg-custom-container').filter({ hasText: 'home keyboard_arrow_right LoginHere\'s how you can lease a carWith a subscription' }).locator('#otpField-2').fill('3');
    await page.locator('fg-custom-container').filter({ hasText: 'home keyboard_arrow_right LoginHere\'s how you can lease a carWith a subscription' }).locator('#otpField-3').fill('4');
    await page.locator('fg-custom-container').filter({ hasText: 'home keyboard_arrow_right LoginHere\'s how you can lease a carWith a subscription' }).locator('#otpField-4').fill('5');
    await page.locator('fg-custom-container').filter({ hasText: 'home keyboard_arrow_right LoginHere\'s how you can lease a carWith a subscription' }).locator('#otpField-5').fill('6');
    await page.getByRole('button', { name: 'Login', exact: true }).click();
    await page.pause();
});*/

test('action', async ({page}) =>
{   
   await page.goto("https://uat.quiklyz.com/");
    await page.getByText('Chennai', { exact: true }).click();
    await page.getByRole('button', { name: 'Login ' }).click();
    await page.getByRole('button', { name: 'Login', exact: true }).click();
    await page.getByRole('textbox', { name: 'Enter Mobile Number' }).fill('7639359309');
    await page.getByRole('button', { name: 'Get OTP' }).click();
    await page.locator('fg-custom-container').filter({ hasText: 'home keyboard_arrow_right LoginHere\'s how you can lease a carWith a subscription' }).locator('#otpField-0').fill('1');
    await page.locator('fg-custom-container').filter({ hasText: 'home keyboard_arrow_right LoginHere\'s how you can lease a carWith a subscription' }).locator('#otpField-1').fill('2');
    await page.locator('fg-custom-container').filter({ hasText: 'home keyboard_arrow_right LoginHere\'s how you can lease a carWith a subscription' }).locator('#otpField-2').fill('3');
    await page.locator('fg-custom-container').filter({ hasText: 'home keyboard_arrow_right LoginHere\'s how you can lease a carWith a subscription' }).locator('#otpField-3').fill('4');
    await page.locator('fg-custom-container').filter({ hasText: 'home keyboard_arrow_right LoginHere\'s how you can lease a carWith a subscription' }).locator('#otpField-4').fill('5');
    await page.locator('fg-custom-container').filter({ hasText: 'home keyboard_arrow_right LoginHere\'s how you can lease a carWith a subscription' }).locator('#otpField-5').fill('6');
    await page.getByRole('button', { name: 'Login', exact: true }).click();
    await page.getByLabel('Sort by Popularity').click();
    await page.getByRole('option', { name: 'Latest Additions' }).click();
    await page.pause();
});