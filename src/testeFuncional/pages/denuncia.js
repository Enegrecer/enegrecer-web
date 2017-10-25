let I;

module.exports = {

  _init() {
    I = actor();
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

  preencherDenuncia(detalhamento, data) {
    I.fillField(this.fields.detalhamento, detalhamento);
    I.fillField(this.fields.data, data);
  },

};
