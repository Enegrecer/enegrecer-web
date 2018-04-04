import React from 'react';
import './css/estatistica.css';

const Estatistica = () => (
  <div id="estatistica">

    <div id="nosso-objetivo">
      <div className="retangular-bloco" />
      <h6>Nosso Objetivo </h6>
      <p>Buscamos dar visibilidade para crimes contra negros a partir de uma
      base de dados acessível, transparente e atualizada. </p>
    </div>

    <div id="rectangle1">
      <h3 className="numero">2345 </h3>
      <h6 className="categoria">Racismo </h6>
    </div>

    <div id="rectangle2">
      <div id="rectangle21">
        <div id="amarelo">
          <h3 className="numero">2345 </h3>
          <h6 className="categoria">Injúria Racial</h6>
        </div>
        <div id="verde">
          <h3 className="numero">60% </h3>
          <h6 className="categoria">Vítimas Mulheres</h6>
        </div>
      </div>

      <div id="rectangle22">
        <div id="cinza">
          <h3 className="numero">2345 </h3>
          <h6 className="categoria">Vítima até 26 anos</h6>
        </div>
        <div id="cinzaClaro">
          <h3 className="numero">346 </h3>
          <h6 className="categoria">Total de Denúncia</h6>
        </div>
      </div>

    </div>
  </div>
);

export default Estatistica;
