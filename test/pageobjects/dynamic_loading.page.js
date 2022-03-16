const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class DynamicLoadingPage extends Page {
    /**
     * define selectors using getter methods
     */
     get startButton() {
        return $('#start button'); //uses Element with certain text selector
   }
  /**
   * overwrite specific options to adapt it to page object
   */
   async Click(path,element) {
     await this.open(path);

      await $(element).click();
      //await $(element).waitForDisplayed({ timeout: 5000, reverse : true });
  }

  async exist(url,element,text) {
        it(text, async () => {
        await this.open(url);
        await browser.pause(5000)
        await expect($(element)).toBeExisting();
        await browser.saveScreenshot('./screenshot/screenshot.png');
        
    });
  }
  async login (path,inputus,inputpass,but,username, password,text) {
    it(text, async () => {
      this.open(path)
      await expect(browser).toHaveUrl('https://nfar.rallybound.org/'+path)
    await $(inputus).setValue(username);
    await browser.pause(2000)
    await $(inputpass).setValue(password);
    await browser.pause(2000)
    await $(but).click();
    await browser.pause(2000)
  });
  }
  get htest(){
      return $('#finish h4');
  }
  open(path) {
      return super.open(path);
  }
}

module.exports = new DynamicLoadingPage();