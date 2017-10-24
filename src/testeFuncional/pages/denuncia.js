'use strict';

let I;

module.exports = {

  _init() {
    I = require('../steps/steps_file.js')();
  },

  // locators
  fields: {
    detalhamento: { id: 'detalhamento' },
    data: { id: 'dataHoraOcorrencia' },

  },
  botaoSalvarDenuncia: { name: 'salvarDenuncia' },


  // methods
  salvarDenuncia() {
    I.click(this.botaoSalvarDenuncia);
  },

  preencherCampos(detalhamento, data) {
    I.fillField(this.fields.detalhamento, detalhamento);
    I.fillField(this.fields.data, data);
  },

}
