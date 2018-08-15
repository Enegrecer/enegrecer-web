/*jshint esversion: 6 */

let denunciaPage = require('../pages/denuncia.js');
let chai = require('chai');
let chaiAsPromised = require('chai-as-promised');
let expect = chai.expect;
chai.use(chaiAsPromised);


Before(function () {
  browser.waitForAngularEnabled(false);
  denunciaPage.init();
});

Given('O usuário acessa a página de cadastrar denúncia', async () => {
  await denunciaPage.abrirPagina();

  return browser.getTitle().then( async (text) => {
    console.log('Title is - ' + text);
    await expect(text).to.equal('Enegrecer');
  });

});

When('O usuário preenche o campo Nome com valor {string}', async (string) => {
  await denunciaPage.preencherCampoNomeDenunciante(string);

});

When('O usuário preenche o campo Email com valor {string}', async (string) => {
  await denunciaPage.preencherCampoEmailDenunciante(string);

});

When('O usuário preenche o campo Descrição do Agressor com valor {string}', async (string) => {
  await denunciaPage.preencherCampoDescricaoAgressor(string);

});

When('O usuário confirma o cadastro da denúncia', async () => {
  await denunciaPage.salvarDenuncia();

});

Then('A denúncia é salva com sucesso e o usuário é redirecionado para página "depois-denuncia"', async () => {
  await expect(browser.getCurrentUrl()).to.eventually.contain('depois-denuncia');
});
