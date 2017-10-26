browser.waitForAngularEnabled(false);

var waitForVisibleElement = (selector, timeout = 5000) => {
  return browser.wait(
    protractor.until.elementLocated(by.css(selector)),
    timeout
  );
};

var bonolotoNumbersSelector = '#lastResultsCarruselRegion .primitiva .numero';

describe('En la página de loterias', () => {
  it('Puedo obtener el último número de la bonoloto', (done) => {

    browser.get('https://www.loteriasyapuestas.es/es');

    waitForVisibleElement(bonolotoNumbersSelector).then(() => {
      return element(by.css(bonolotoNumbersSelector)).getText();
    }).then((data) => {
      console.log(data);
      done();
    });

  });
});
