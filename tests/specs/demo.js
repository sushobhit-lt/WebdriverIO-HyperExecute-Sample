
describe('Demo Function', () => {
    it('Demo steps', async() => {
    await browser.url('https://www.lambdatest.com/automation-demos/')
    for( var i=0; i<1; i++){
        browser.getTitle()
        browser.getTitle()
    }

    const result = await browser.execute("smartui.takeScreenshot=demo");
    console.log(result)
    await browser.url('https://www.lambdatest.com')
    const result1 = await browser.execute("smartui.takeScreenshot=website");
    console.log(result1)
    const username = $('#username')
    username.setValue('lambda')
    const password = $('#password')
    password.setValue('lambda123')
    const loginbutton = $('/html/body/div[1]/div[1]/section[2]/div/div/form/div[3]/button')
    loginbutton.click()
    const displaypage = $('#developer-name')
    displaypage.isDisplayed()
    displaypage.setValue('demo@lambdatest.com');
    const random= $('/html/body/div[1]/div[1]/section[2]/div/div/div[1]/p[4]/label/input')
    random.click()
    const other = $('#others')
    other.click()
    const checkbox= $('#tried-ecom')
    checkbox.click()
    const textArea= $('#comments')
    textArea.setValue('Hi This is LambdaTest automation Demo')

});
});
