Feature('Criar Denuncia');

Scenario('Fazer Denuncia', (I, homePage, loginPage, denunciaPage) => {
  I.amOnPage('/');
  homePage.denuncia();
  I.see('Acesso');
  loginPage.preencherLogin('a@a.com', '123456');
  loginPage.entrar();
  denunciaPage.preencherDenuncia('Teste', '12/10/2017');
  denunciaPage.salvarDenuncia();
});
