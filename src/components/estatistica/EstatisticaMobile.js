import React from 'react';
import './css/estatisticaMobile.css';
import Racismo from './Racismo';
import Injuria from './Injuria';
import VitimasMulheres from './VitimasMulheres';
import VitimasAte29Anos from './VitimasAte29Anos';
import TotalDeDenuncia from './TotalDeDenuncia';

const EstatisticaMobile = () => (
  <div id="estatistica-mobile">
    <div id="nosso-objetivo-mobile">
      <div className="retangular-bloco" />
      <h6>Nosso Objetivo </h6>
      <p>Buscamos dar visibilidade para crimes contra negros a partir de uma
      base de dados acessível, transparente e atualizada.
      </p>
    </div>
    <div className="nossas-denuncias-mobile">NOSSAS DENUNCIAS </div>
    <Racismo id="vermelhoMobile" key="racismo" />
    <div id="rectangle2-mobile">
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
