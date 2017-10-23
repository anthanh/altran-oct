browser.waitForAngularEnabled(false);

waitForVisibleElement = (selector, timeout = 5000) => {
  return browser.wait(
    protractor.until.elementLocated(by.css(selector)),
    timeout
  );
};

describe('google page', () => {
  it('can submit a search', (done) => {

    browser.get('https://www.google.es');

    waitForVisibleElement('#lst-ib').then(() => {
      // document.querySelector('#lst-ib').value = 'example search'
      return element(by.css('#lst-ib')).sendKeys('example search');
    }).then(() => {
      // document.querySelector('input[jsaction="sf.chk"]').click()
      return element(by.css('#lst-ib')).sendKeys(protractor.Key.ENTER);
    }).then(() => {
      return waitForVisibleElement('#resultStats')
    }).then(() => {
      return element(by.css('#resultStats')).getText();
    }).then((data) => {
      expect(data.indexOf('About') !== -1).toEqual(true);
      done();
    });

  });
});
