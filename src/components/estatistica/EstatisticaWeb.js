import React from 'react';
import './css/estatistica.css';
import Racismo from './Racismo';
import Injuria from './Injuria';
import VitimasMulheres from './VitimasMulheres';
import VitimasAte29Anos from './VitimasAte29Anos';
import TotalDeDenuncia from './TotalDeDenuncia';

const EstatisticaMobile = () => (
  <div id="estatistica">
    <div id="nosso-objetivo">
      <div className="retangular-bloco" />
      <h6>Nosso Objetivo </h6>
      <p>Buscamos dar visibilidade para crimes contra negros a partir de uma
      base de dados acessível, transparente e atualizada.
      </p>
    </div>
    <Racismo id="vermelho" key="racismo" />
    <div id="rectangle2">
      <div className="nossas-denuncias">NOSSAS DENUNCIAS </div>
      <div id="rectangle21">
        <Injuria key="injuria" />
        <VitimasMulheres key="vitimasMulheres" />
      </div>
      <div id="rectangle22">
        <VitimasAte29Anos key="vitimasAte29Anos" />
        <TotalDeDenuncia key="totalDeDenuncia" />
      </div>
    </div>
  </div>
);

export default EstatisticaMobile;
