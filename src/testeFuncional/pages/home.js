
'use strict';

let I;

module.exports = {

  _init() {
    I = require('../steps/steps_file.js')();
  },

  // locators
  botaoSobre: { name: 'sobre' },
  botaoLogin: { name: 'Registrar / Entrar' },
  botaoDenuncia: { name: 'denuncia' },


  // methods
  login() {
    I.click(this.botaoLogin);
  },

  sobre() {
    I.click(this.botaoSobre);
  },

  denuncia() {
    I.click(this.botaoDenuncia);
  },

}
