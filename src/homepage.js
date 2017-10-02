module.exports = {
  'Demo test Google' : function (browser) {
    browser
      .url('http://www.google.com')
      .waitForElementVisible('body', 1000)
      .setValue('input[type=text]', ['nightwatch',browser.Keys.ENTER])
      .assert.containsText('#main', 'Night Watch')
      .end();
  }
};