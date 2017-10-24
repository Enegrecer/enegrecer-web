Feature('Criar Denuncia');

Scenario('Fazer Denuncia', (I, homePage, loginPage, denunciaPage) => {
  I.amOnPage('/');
  homePage.denuncia();
  I.see('Acesso');
  loginPage.preencherCampos('a@a.com', '123456');
  loginPage.entrar();
  denunciaPage.preencherCampos('Teste', '12/10/2017');
  denunciaPage.salvarDenuncia();
});
