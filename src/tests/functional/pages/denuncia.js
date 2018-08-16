/* jshint esversion: 6 */
/* global browser element protractor by */
/* eslint one-var: ["error", "always"] */

const timeout = 30000;
const EC = protractor.ExpectedConditions;
let nomeDenunciante,
  emailDenunciante,
  descricaoAgressor,
  enviarDenuncia,
  dataNascimentoDenunciante,
  estadoDenunciante,
  cidadeDenunciante,
  telefoneDenunciante,
  racaDenunciante,
  generoDenunciante,
  nomeVitima,
  dataNascimentoVitima,
  estadoVitima,
  cidadeVitima,
  telefoneVitima,
  racaVitima,
  generoVitima,
  descricaoAgressao;

module.exports = {
  init: () => {
    nomeDenunciante = element(by.name('nomeDenunciante'));
    emailDenunciante = element(by.name('emailDenunciante'));
    descricaoAgressor = element(by.name('descricaoAgressor'));
    enviarDenuncia = element(by.name('action'));
    dataNascimentoDenunciante = element(by.name('dataNascimentoDenunciante'));
    estadoDenunciante = element(by.name('estadoDenunciante'));
    cidadeDenunciante = element(by.name('cidadeDenunciante'));
    telefoneDenunciante = element(by.name('telefoneDenunciante'));
    racaDenunciante = element(by.name('racaDenunciante'));
    generoDenunciante = element(by.name('generoDenunciante'));
    nomeVitima = element(by.name('nomeVitima'));
    dataNascimentoVitima = element(by.name('dataNascimentoVitima'));
    estadoVitima = element(by.name('estadoVitima'));
    cidadeVitima = element(by.name('cidadeVitima'));
    telefoneVitima = element(by.name('telefoneVitima'));
    racaVitima = element(by.name('racaVitima'));
    generoVitima = element(by.name('generoVitima'));
    descricaoAgressao = element(by.name('descricaoAgressao'));
  },

  abrirPagina: () =>
    browser.get('/denunciar'),

  preencherCampoNomeDenunciante: (string) => {
    browser.wait(EC.visibilityOf(nomeDenunciante), timeout);
    return nomeDenunciante.sendKeys(string);
  },

  preencherCampoDataNascimentoDenunciante: (string) => {
    browser.wait(EC.visibilityOf(dataNascimentoDenunciante), timeout);
    return dataNascimentoDenunciante.sendKeys(string);
  },

  selecionarEstadoDenunciante: (string) => {
    browser.wait(EC.visibilityOf(estadoDenunciante), timeout);
    return estadoDenunciante.sendKeys(string);
  },

  selecionarCidadeDenunciante: (string) => {
    browser.wait(EC.visibilityOf(cidadeDenunciante), timeout);
    return cidadeDenunciante.sendKeys(string);
  },

  preencherCampoTelefoneDenunciante: (string) => {
    browser.wait(EC.visibilityOf(telefoneDenunciante), timeout);
    return telefoneDenunciante.sendKeys(string);
  },

  preencherCampoEmailDenunciante: (string) => {
    browser.wait(EC.visibilityOf(emailDenunciante), timeout);
    return emailDenunciante.sendKeys(string);
  },

  preencherCampoRacaDenunciante: (string) => {
    browser.wait(EC.visibilityOf(racaDenunciante), timeout);
    return racaDenunciante.sendKeys(string);
  },

  preencherCampoGeneroDenunciante: (string) => {
    browser.wait(EC.visibilityOf(generoDenunciante), timeout);
    return generoDenunciante.sendKeys(string);
  },

  preencherCampoNomeVitima: (string) => {
    browser.wait(EC.visibilityOf(nomeVitima), timeout);
    return nomeVitima.sendKeys(string);
  },

  preencherCampoDataNascimentoVitima: (string) => {
    browser.wait(EC.visibilityOf(dataNascimentoVitima), timeout);
    return dataNascimentoVitima.sendKeys(string);
  },

  selecionarEstadoVitima: (string) => {
    browser.wait(EC.visibilityOf(estadoVitima), timeout);
    return estadoVitima.sendKeys(string);
  },

  selecionarCidadeVitima: (string) => {
    browser.wait(EC.visibilityOf(cidadeVitima), timeout);
    return cidadeVitima.sendKeys(string);
  },

  preencherCampoTelefoneVitima: (string) => {
    browser.wait(EC.visibilityOf(telefoneVitima), timeout);
    return telefoneVitima.sendKeys(string);
  },

  preencherCampoRacaVitima: (string) => {
    browser.wait(EC.visibilityOf(racaVitima), timeout);
    return racaVitima.sendKeys(string);
  },

  preencherCampoGeneroVitima: (string) => {
    browser.wait(EC.visibilityOf(generoVitima), timeout);
    return generoVitima.sendKeys(string);
  },

  preencherCampoDescricaoAgressor: (string) => {
    browser.wait(EC.visibilityOf(descricaoAgressor), timeout);
    return descricaoAgressor.sendKeys(string);
  },

  salvarDenuncia: () => {
    browser.wait(EC.elementToBeClickable(enviarDenuncia), timeout);
    return enviarDenuncia.click();
  }

};
