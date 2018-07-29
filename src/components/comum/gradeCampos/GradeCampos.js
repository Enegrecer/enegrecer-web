import React from 'react';
import PropTypes from 'prop-types';

import SeparadorPontilhado from '../separadorPontilhado/SeparadorPontilhado';
import CamposVisualizarDenuncia from '../camposVisualizarDenuncia/CamposVisualizarDenuncia';
import './gradeCampos.css';

const GradeCampos = ({ dados }) => (
  <div>
    <div className="titulo-detalhes">
      {dados.titulo}
    </div>
    <SeparadorPontilhado />
    <div className="grade">
      <div className="campos-esquerda">
        {dados.camposEsquerda.map((campoEsquerda, index) => (
          <CamposVisualizarDenuncia
            key={index}
            titulo={campoEsquerda.titulo}
            descricao={campoEsquerda.descricao}
          />
        ))}
      </div>
      <div>
        {dados.camposDireita.map((campoDireita, index) => (
          <CamposVisualizarDenuncia
            key={index}
            titulo={campoDireita.titulo}
            descricao={campoDireita.descricao}
          />
        ))}
      </div>
    </div>
  </div>
);

GradeCampos.propTypes = {
  dados: PropTypes.shape({
    titulo: PropTypes.string,
    camposEsquerda: PropTypes.array,
    camposDireita: PropTypes.array
  })
};

GradeCampos.defaultProps = {
  dados: undefined
};

export default GradeCampos;
