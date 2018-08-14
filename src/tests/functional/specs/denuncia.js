/*jshint esversion: 6 */

let denunciaPage = require('../pages/denuncia.js');

let chai = require('chai');
let chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
let expect = chai.expect;
var {setDefaultTimeout} = require('cucumber');
setDefaultTimeout(60 * 1200);
var timeout = 30000;
var EC = protractor.ExpectedConditions;

Before(function () {
  browser.waitForAngularEnabled(false);
  denunciaPage.init();
});

Given('O usuário acessa a página de cadastrar denúncia', function () {
  denunciaPage.abrirPagina();

  return browser.getTitle().then(function(text){
    console.log('Title is - ' + text);
     expect(text).to.equal('Enegrecer');
  });

});

When('O usuário preenche o campo Nome com valor {string}', function (string) {
  denunciaPage.preencherCampoNomeDenunciante(string);

  // return element(by.name('nomeDenunciante')).sendKeys(string);
});

When('O usuário preenche o campo Email com valor {string}', function (string) {
  // denunciaPage.preencherCampoEmailDenunciante(string);

  var campoEmailDenunciante = element(by.name('emailDenunciante'));
  browser.wait(EC.visibilityOf(campoEmailDenunciante), timeout);
  campoEmailDenunciante.sendKeys(string);

  // return element(by.name('emailDenunciante')).sendKeys(string);
});

When('O usuário preenche o campo Descrição do Agressor com valor {string}', function (string) {
  // denunciaPage.preencherCampoDescricaoAgressor(string);

  var descricaoAgressor = element(by.name('descricaoAgressor'));
  browser.wait(EC.visibilityOf(descricaoAgressor), timeout);
  descricaoAgressor.sendKeys(string);

  // return element(by.name('descricaoAgressor')).sendKeys(string);
});

When('O usuário confirma o cadastro da denúncia', function () {
  // denunciaPage.salvarDenuncia();

  var botaoEnviarDenuncia = element(by.name('action'));
  browser.wait(EC.elementToBeClickable(botaoEnviarDenuncia), timeout);
  return botaoEnviarDenuncia.click();

  // return element(by.name('action')).click();
});

Then('A denúncia é salva com sucesso e o usuário é redirecionado para página "depois-denuncia"', function () {
  expect(browser.getCurrentUrl()).to.eventually.contain('depois-denuncia');
});
