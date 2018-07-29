import React from 'react';
import { withRouter } from 'react-router-dom';
import img from '../../imagens/ayo-ogunseinde.png';
import './css/home.css';

const DenunciarHome = withRouter(({ history }) => (
  <div className="denunciarHome">
    <div className="parte1 col s12 m6">
      <img src={img} alt="Nos ajude fazendo uma denuncia" />
    </div>
    <div className="parte2 col s12 m6">
      <h6> Nos ajude fazendo uma denúncia</h6>
      <p> Gostaria de reportar uma situação em que
    foi discriminado ou que presenciou?
      </p>
      <div
        role="button"
        tabIndex="0"
        className="bt_denuncia denunciar"
        onClick={() => history.push('/denunciar')}
        onKeyDown={() => history.push('/denunciar')}
      >
        DENUNCIAR
      </div>
    </div>
  </div>
));

export default DenunciarHome;
