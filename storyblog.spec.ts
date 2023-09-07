import { chromium,expect,test,Page } from "@playwright/test";
test.describe.configure({ mode : 'parellel' });
test.use({
    viewport:{
        width: 1524,
        height:768
    }
})
test ('success stories',async ({page}) =>
{
    await page.goto('https://ultimateqa.com/automation/');
    await page.getByPlaceholder('First Name').fill('jameen');
    await page.locator('input[name="email_address"]').fill('mohamedjameen.h@finezoom.com');
    await page.locator('input[name="email_address"]').click();
    await page.getByRole('link', { name: 'Success Stories' }).click();
    console.log('These students aren’t just satisfied, they have gotten real results as SDETs. Our programs are rated 4.9 Stars out of 5 from 987 customer reviews. 6% of the reviews include the word “love”');
    await page.pause();
}

);

test ('blog', async ({page}) =>
{   
    await page.goto('https://ultimateqa.com/automation/');
    await page.getByRole('link', { name: 'Blog' }).click();
    await page.pause();
});

test ('blog2', async ({page}) =>
{   
    await page.goto('https://ultimateqa.com/automation/');
    await page.getByRole('link', { name: 'Blog' }).click();
    await page.pause();
});