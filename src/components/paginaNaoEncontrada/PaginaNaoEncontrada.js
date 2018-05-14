import React from 'react';
import img from '../../imagens/ayo-ogunseinde.png';
import './css/paginaNaoEncontrada.css';

const PaginaNaoEncontrada = () => (
  <div className="paginaNaoEncontrada">
    <div className="parte1 col s12 m6">
      <img src={img} alt="Nos ajude fazendo uma denuncia" />
    </div>
    <div className="parte2 col s12 m6">
      <h6>Não encontramos a página que você requisitou.</h6>
    </div>
  </div>

);

export default PaginaNaoEncontrada;
