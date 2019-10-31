import React from 'react';
import { withRouter } from 'react-router-dom';
import img from '../../imagens/ayo-ogunseinde.png';
import './css/home.css';

const DenunciarHome = withRouter(({ history }) => (
  <div className="denunciarHome">
    <div className="parte1">
      <img src={img} alt="Nos ajude fazendo uma denuncia" />
    </div>
    <div className="parte2">
      <h6> Nos ajude fazendo uma denúncia</h6>
      <div className="clearFix" />

      <p> Gostaria de reportar uma situação em que
    foi discriminado ou que presenciou?
      </p>
      <div className="clearFix" />
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
