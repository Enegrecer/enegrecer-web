'use strict';

let I;

module.exports = {

  _init() {
    I = require('../steps/steps_file.js')();
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

  preencherCampos(email, senha) {
    I.fillField(this.fields.email, 'a@a.com');
    I.fillField(this.fields.senha, '123456');
  },

}
