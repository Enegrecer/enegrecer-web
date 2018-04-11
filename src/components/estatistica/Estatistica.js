import React from 'react';
import './css/estatistica.css';
import TipoDeEstatistica from './TipoDeEstatistica';

const Estatistica = () => (
  <div id="estatistica">

    <div id="nosso-objetivo">
      <div className="retangular-bloco" />
      <h6>Nosso Objetivo </h6>
      <p>Buscamos dar visibilidade para crimes contra negros a partir de uma
      base de dados acessível, transparente e atualizada. </p>
    </div>

    <TipoDeEstatistica key="vermelho" id="vermelho" numero="2345" categoria="Racismo" />
    <div id="rectangle2">
      <div id="rectangle21">
        <TipoDeEstatistica key="amarelo" id="amarelo" numero="2345" categoria="Injúria Racial" />
        <TipoDeEstatistica key="verde" id="verde" numero="60%" categoria="Vítimas Mulheres" />
      </div>
      <div id="rectangle22">
        <TipoDeEstatistica key="cinza" id="cinza" numero="23" categoria="Vítima até 26 anos" />
        <TipoDeEstatistica key="cinzaClaro" id="cinzaClaro" numero="346" categoria="Total de Denúncia" />
      </div>
    </div>
  </div>
);

export default Estatistica;
