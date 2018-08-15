/*jshint esversion: 6 */

let campoNomeDenunciante,
  campoEmailDenunciante,
  campoDescricaoAgressor,
  botaoEnviarDenuncia,
  timeout = 30000,
  EC = protractor.ExpectedConditions;

module.exports = {
  init: () => {
    campoNomeDenunciante = element(by.name('nomeDenunciante'));
    campoEmailDenunciante = element(by.name('emailDenunciante'));
    campoDescricaoAgressor = element(by.name('descricaoAgressor'));
    botaoEnviarDenuncia = element(by.name('action'));
  },

  abrirPagina: () => {
    console.log(browser.getSession().value_.id_);
    return browser.get('/denunciar');
  },

  preencherCampoNomeDenunciante: (string) => {
    browser.wait(EC.visibilityOf(campoNomeDenunciante), timeout);
    return campoNomeDenunciante.sendKeys(string);
  },

  preencherCampoEmailDenunciante: (string) => {
    browser.wait(EC.visibilityOf(campoEmailDenunciante), timeout);
    return campoEmailDenunciante.sendKeys(string);
  },

  preencherCampoDescricaoAgressor: (string) => {
    browser.wait(EC.visibilityOf(campoDescricaoAgressor), timeout);
    return campoDescricaoAgressor.sendKeys(string);
  },

  salvarDenuncia: () => {
    browser.wait(EC.elementToBeClickable(botaoEnviarDenuncia), timeout);
    return botaoEnviarDenuncia.click();
  }

};
