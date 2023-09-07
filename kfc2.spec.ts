import { chromium,expect,test,Page } from "@playwright/test";
test.describe.configure({ mode: 'serial' });
test ('has title',async ({page}) =>
{
    await page.goto('https://online.kfc.co.in/');
    await page.getByText('PERI PERI CHICKEN').click();
    await page.getByTestId('add-to-cart-D-PR00002144').click();
    await page.getByTestId('disposition-order-click-handler-Disposition - Pickup').click();
    await page.getByTestId('store-search-input').fill('tiliconveli');
    await page.getByText('Tiliconveli Tech Park, Trivandrum Road, near Govt. Engg. College, Meetpernagar, ').click();
    await page.getByTestId('schedule-order').click();
    await page.getByTestId('confirm-button-handler').click();
    console.log('category not available');
    await page.pause();
}

);
test ('has box meal',async ({page}) =>
{   
    await page.goto('https://online.kfc.co.in/');
    await page.getByRole('button', { name: 'Menu' }).click();
    await page.getByText('BOX MEALS').click();
    await page.getByTestId('add-to-cart-D-PR00001003').click();
    await page.getByTestId('disposition-order-click-handler-Disposition - Pickup').click();
    await page.getByTestId('store-search-input').fill('tiliconveli');
    await page.getByText('Tiliconveli Tech Park, Trivandrum Road, near Govt. Engg. College, Meetpernagar, ').click();
    await page.getByTestId('schedule-order').click();
    await page.getByTestId('confirm-button-handler').click();
    console.log('items are not available in your location');
    await page.pause();
}
);