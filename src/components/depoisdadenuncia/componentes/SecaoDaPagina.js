import React from 'react';
import PropTypes from 'prop-types';
import '../css/secaodapagina.css';

const SecaoDaPagina = props => (
  <div className="row depois_denuncia_secao">
    <div className={`col s12 m6 conteudo_${props.ladoTexto}`}>
      <div className="detalhe_titulo">
        <h1>{props.tituloDaSecao1}</h1>
        <div className={`${props.tracoVermelho}`} />
      </div>
      <h1>{props.tituloDaSecao2}</h1>
      <div className="texto_secao">
        <p>{props.textoDoBloco}</p>
      </div>
    </div>

    <div className="col s12 m6 imagem_secao">
      <img src={props.imagemSecao} alt={`Imagem de ${props.nomeFoto}`} />
    </div>
  </div>
);

SecaoDaPagina.propTypes = {
  tituloDaSecao1: PropTypes.string,
  tituloDaSecao2: PropTypes.string,
  tracoVermelho: PropTypes.string,
  ladoTexto: PropTypes.string.isRequired,
  textoDoBloco: PropTypes.string.isRequired,
  imagemSecao: PropTypes.string.isRequired,
  nomeFoto: PropTypes.string.isRequired,
};

SecaoDaPagina.defaultProps = {
  tituloDaSecao1: '',
  tituloDaSecao2: '',
  tracoVermelho: '',
};

export default SecaoDaPagina;
