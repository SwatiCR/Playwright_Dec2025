import test from '@playwright/test'

test("Login Page",async({page})=>{

    await page.goto("https://login.salesforce.com/?locale=in")
    await page.locator("#username").fill("dilipkumar.rajendran@testleaf.com")
    await page.locator("#password").fill("TestLeaf@2025")
    await page.locator("#Login").click()
    await page.waitForTimeout(6000)
    let title = await page.title()
    console.log(title)
    await page.waitForTimeout(3000)

    await page.locator(".slds-icon-waffle").click()

    await page.waitForTimeout(6000)

    //await page.locator()

  /*  classRoom:
load url : https://login.salesforce.com/?locale=in
username : dilipkumar.rajendran@testleaf.com
password : TestLeaf@2025
click on login button
wait(12000)
gettitle of page 
click on applauncher or 9 dot icon*/
}
)