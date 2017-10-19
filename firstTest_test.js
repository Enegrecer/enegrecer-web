
Feature('FirstTest');

Scenario('test something', (I) => {
  I.amOnPage('/');
  I.see('Enegrecer');
  I.click('Denunciar Racismo');
  I.see('Acesso');
  I.fillField('Email', 'a@a.com');
  I.fillField('Senha', '123456');
  I.click('Entrar');
  // within({ css: '[name=form-denuncia]' }, () => {
  //   I.waitForElement('Detalhamento:');
  //   I.see('Detalhamento:');
  // });
});
