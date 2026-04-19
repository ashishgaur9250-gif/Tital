import { chromium } from '@playwright/test';



  async function  runTest() {
    const browser = await chromium.launch({ headless: false, args: ['--start-maximized'] });
    const context = await browser.newContext({viewport: null});
    const page = await context.newPage();
    // console.log("New page opened.");

    // Open Website
    await page.goto('https://www.naukri.com/');
    console.log("Navigated to Naukri website successfully.");
    
    // Click Login
    await page.locator("//a[@href='https://login.naukri.com/nLogin/Login.php']").click();
    console.log("Clicked on Login button.");
    
    // Enter Email
    await page.getByPlaceholder('Enter your active Email ID / Username')
      .fill('ashishgaud0001@gmail.com');
    console.log("Email entered successfully.");
    
    // Enter Password
    await page.getByPlaceholder('Enter your password')
      .fill('Ashish1234@');
    console.log("Password entered successfully.");
    
    // Submit Login
    await page.keyboard.press('Enter');
    console.log("Login submitted successfully. Waiting for OTP verification if required...");
    
    // Go to Profile
    await page.locator("//a[@href='/mnjuser/profile']").click();
    console.log("Navigated to profile page successfully.");
    
    // Edit Profile (Top Section)
    await page.getByRole('emphasis').filter({ hasText: 'editOneTheme' }).click();
    console.log("Clicked Edit button (Top Profile Section).");
    
    await page.getByRole('button', { name: 'Save' }).click();
    console.log("Saved top profile section successfully.");
    
    // Close Popup
    await page.locator('.lightbox.profileEditDrawer.profileUpdatedProLayer > .crossLayer > .icon').click();
    console.log("Closed profile update popup successfully.");
    
    // Resume Head
    await page.locator('#lazyResumeHead').getByText('editOneTheme').click();
    console.log("Editing Resume Head section.");
    await page.getByRole('button', { name: 'Save' }).click();
    console.log("Saved Resume Head section.");
    
    // Key Skills
    await page.locator('#lazyKeySkills').getByText('editOneTheme').click();
    console.log("Editing Key Skills section.");
    await page.getByRole('button', { name: 'Save' }).click();
    console.log("Saved Key Skills section.");
    
    // Section 4
    await page.getByText('editOneTheme').nth(4).click();
    console.log("Editing section 4.");
    await page.getByRole('button', { name: 'Save' }).click();
    console.log("Saved section 4.");
    
    // Section 5
    await page.getByText('editOneTheme').nth(5).click();
    console.log("Editing section 5.");
    await page.getByRole('button', { name: 'Save' }).click();
    console.log("Saved section 5.");
    
    // Span Section
    await page.locator('span').filter({ hasText: /^editOneTheme$/ }).nth(5).click();
    console.log("Editing span section.");
    await page.getByRole('button', { name: 'Save' }).click();
    console.log("Saved span section.");
    
    // Icon Section
    await page.locator('.col.icon').first().click();
    console.log("Clicked first icon section.");
    await page.getByRole('button', { name: 'Save' }).click();
    console.log("Saved icon section.");
    
    // Right Align Icon
    await page.locator('.col.icon.edit.right-align').click();
    console.log("Clicked right-align icon section.");
    await page.getByRole('button', { name: 'Save' }).click();
    console.log("Saved right-align icon section.");
    
    // First Title
    await page.locator('.col.s12.item.title > .edit').first().click();
    console.log("Editing first title section.");
    await page.getByRole('button', { name: 'Save' }).click();
    console.log("Saved first title section.");
    
    // Second Title
    await page.locator('div:nth-child(2) > .col.s12.item.title > .edit').click();
    console.log("Editing second title section.");
    await page.getByRole('button', { name: 'Save' }).click();
    console.log("Saved second title section.");
    
    // Close Browser
    await browser.close();
    console.log("Browser closed successfully. Test execution completed.");

}

// Run Script

runTest();
