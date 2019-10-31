/* jshint esversion: 6 */
/* global Before browser Given When Then */

const denunciaPage = require('../pages/denuncia.js');
const chai = require('chai');
const faker = require('faker');

faker.locale = 'pt_BR';
const chaiAsPromised = require('chai-as-promised');

const expect = chai.expect;
chai.use(chaiAsPromised);
const { setDefaultTimeout } = require('cucumber');

setDefaultTimeout(20 * 1000);

Before(() => {
  browser.waitForAngularEnabled(false);
  denunciaPage.init();
});

Given('O usuário acessa a página de cadastrar denúncia', async () => {
  await denunciaPage.abrirPagina();

  return browser.getTitle().then(async (text) => {
    console.log(`Title is - ${text}`);
    await expect(text).to.equal('Enegrecer');
  });
});

When('O usuário preenche os campos para o cadastro da denúncia', async () => {
  const nomeDenunciante = faker.name.firstName();
  await denunciaPage.preencherCampoNomeDenunciante(nomeDenunciante);
  let dataNasDen = faker.date.between('1960-01-01', '2002-01-01');
  dataNasDen = `${dataNasDen.getDate()}/${dataNasDen.getMonth() + 1}/${dataNasDen.getFullYear()}`;
  await denunciaPage.preencherCampoDataNascimentoDenunciante(dataNasDen);
  const estadoDenunciante = faker.address.state();
  await denunciaPage.selecionarEstadoDenunciante(estadoDenunciante);
  const telefoneDenunciante = faker.phone.phoneNumberFormat();
  await denunciaPage.preencherCampoTelefoneDenunciante(telefoneDenunciante);
  const emailDenunciante = faker.internet.email();
  await denunciaPage.preencherCampoEmailDenunciante(emailDenunciante);
  const racaDecunciante = faker.random.arrayElement(['Preta', 'Parda']);
  await denunciaPage.preencherCampoRacaDenunciante(racaDecunciante);
  const generoDenunciante = faker.random.arrayElement(['Feminino', 'Masculino']);
  await denunciaPage.preencherCampoGeneroDenunciante(generoDenunciante);

  const nomeVitima = faker.name.firstName();
  await denunciaPage.preencherCampoNomeVitima(nomeVitima);
  let dataNasVit = faker.date.between('1960-01-01', '2002-01-01');
  dataNasVit = `${dataNasVit.getDate()}/${dataNasVit.getMonth() + 1}/${dataNasVit.getFullYear()}`;
  await denunciaPage.preencherCampoDataNascimentoVitima(dataNasVit);
  const estadoVitima = faker.address.state();
  await denunciaPage.selecionarEstadoVitima(estadoVitima);
  const telefoneVitima = faker.phone.phoneNumberFormat();
  await denunciaPage.preencherCampoTelefoneVitima(telefoneVitima);
  const racaVitima = faker.random.arrayElement(['Preta', 'Parda']);
  await denunciaPage.preencherCampoRacaVitima(racaVitima);
  const generoVitima = faker.random.arrayElement(['Feminino', 'Masculino']);
  await denunciaPage.preencherCampoGeneroVitima(generoVitima);

  const descricaoAgressor = faker.lorem.sentence();
  await denunciaPage.preencherCampoDescricaoAgressor(descricaoAgressor);

  const cidadeDeninciante = faker.address.city();
  await denunciaPage.selecionarCidadeDenunciante(cidadeDeninciante);
  const cidadeVitima = faker.address.city();
  await denunciaPage.selecionarCidadeVitima(cidadeVitima);
});

When('O usuário confirma o cadastro da denúncia', async () => {
  await denunciaPage.salvarDenuncia();
});

Then('A denúncia é salva com sucesso e o usuário é redirecionado para página "depois-denuncia"', async () => {
  await expect(browser.getCurrentUrl()).to.eventually.contain('depois-denuncia');
});
