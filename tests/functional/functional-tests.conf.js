/* jshint esversion: 6 */
/* global browser */

exports.config = {
  capabilities: {
    browserName: 'chrome',
    shardTestFiles: true
  },
  allScriptsTimeout: 10000,
  seleniumAddress: 'http://localhost:4444/wd/hub',
  baseUrl: 'http://localhost:3000/',
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  specs: ['./features/*.feature'],
  restartBrowserBetweenTests: false,
  cucumberOpts: {
    require: [
      './specs/*.js',
    ],
    tags: [],
    strict: true,
    'dry-run': false,
    compiler: [],
  },

  onPrepare() {
    browser.manage().timeouts().pageLoadTimeout(40000);
    const { Given, Then, When, Before } = require('cucumber');
    global.Given = Given;
    global.When = When;
    global.Then = Then;
    global.Before = Before;
  }
};

