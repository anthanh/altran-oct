browser.waitForAngularEnabled(false)

describe('google page', () => {
  it('can submit a search', (done) => {

    browser.get('https://www.google.es');

    element(by.css('#lst-ib')).sendKeys('example search');
    element(by.css('#lst-ib')).sendKeys(protractor.Key.ENTER);
    // element(by.css('input[jsaction="sf.chk"]')).click();

    var text = element(by.css('#resultStats')).getText();
    text.then((data) =>  {
      expect(data.indexOf('About') !== -1).toEqual(true);
      done();
    });

  });
});

// document.querySelector('#lst-ib').value = 'example search'
// document.querySelector('input[jsaction="sf.chk"]').click()
