import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../imagens/logo.svg';
import './menu.css';

export default class Menu extends Component {
  render() {
    return (
      <div className="menu">
        <div className="logo">
          <img src={logo} alt="Logo Verdade Seja Dita" />
        </div>
        <div className="links">
          <Link to="/sobre">SOBRE</Link>
          <Link to="/depoisdenuncia">E DEPOIS DA DENÚNCIA?</Link>
          <Link to="/coletivo">O COLETIVO ENEGRECER</Link>
          <Link to="/denunciar">DENUNCIAR</Link>
        </div>
      </div>
    )
  }
}