import test from '@playwright/test'

test("Drop Down Exercise",async({page})=>{
    await page.goto("https://www.telerik.com/contact")
    await page.selectOption("#Dropdown-1",{index:3})
    await page.selectOption("#Dropdown-2",{value:"DevCraft"})
    await page.selectOption("[title='Country dropdown']",{label:"Algeria"})
})