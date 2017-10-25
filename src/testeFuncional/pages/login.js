const actor = require('../steps/steps_file');

let I;

module.exports = {

  _init() {
    I = actor();
  },

  // locators
  fields: {
    email: 'Email',
    senha: 'Senha',
  },
  botaoEntrar: { name: 'Entrar' },


  // methods
  entrar() {
    I.click(this.botaoEntrar);
  },

  preencherLogin(email, senha) {
    I.fillField(this.fields.email, email);
    I.fillField(this.fields.senha, senha);
  },

};
