
Feature('Criar Denuncia');

Scenario('Fazer Denuncia', (I, homePage, loginPage, denunciaPage) => {
  I.amOnPage('/');
  homePage.denuncia();
  I.see('Acesso');
  loginPage.preencherCampos('a@a.com', '123456');
  loginPage.entrar();
  //denunciaPage.confirmarPagina();
  denunciaPage.preencherCampos();
  denunciaPage.salvarDenuncia();
});


// I.see('Enegrecer');
// I.click('Denunciar Racismo');
//
// I.click('Entrar');
// within({ css: '[name=form-denuncia]' }, () => {
//   I.see('Detalhamento:');
//   I.fillField('Detalhamento:', 'Test automatizado');
// });
