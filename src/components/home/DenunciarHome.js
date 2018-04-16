import React from 'react';
import './css/home.css';
import img from '../../imagens/ayo-ogunseinde.png'
import { Link } from 'react-router-dom';

const DenunciarHome = () => (
  <div className="denunciarHome">
    <div className="parte1 col s12 m6">
      <img src={img}/>
    </div>
    <div className="parte2 col s12 m6">
    <h6> Nos ajude fazendo uma denúncia</h6>
    <p> Gostaria de reportar uma situação em que
    foi discriminado ou que presenciou? </p>
    <Link className="denunciar" to="/denunciar">DENUNCIAR</Link>
    </div>
  </div>
);

export default DenunciarHome;
