import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import GradeCampos from '../comum/gradeCampos/GradeCampos';
import './visualizarDenuncia.css';

const dadosDenunciante =
{
  titulo: 'Dados do denunciante',
  camposEsquerda: [
    {
      titulo: 'Nome denunciante',
      descricao: 'Beatriz Soare'
    },
    {
      titulo: 'Telefone',
      descricao: '(31) 9884455-7733'
    },
    {
      titulo: 'Gênero',
      descricao: 'Feminino CIS'
    },
    {
      titulo: 'Raça / Cor',
      descricao: 'Parda'
    }
  ],
  camposDireita: [
    {
      titulo: 'Email',
      descricao: 'beatriz-soares@gmail.com'
    },
    {
      titulo: 'Cidade',
      descricao: 'Belo Horizonte'
    },
    {
      titulo: 'Data de nascimento',
      descricao: 'Abril 14, 1988'
    }
  ]
};

const dadosVitima =
{
  titulo: 'Dados da vítima',
  camposEsquerda: [
    {
      titulo: 'Nome',
      descricao: 'Beatriz Soares'
    },
    {
      titulo: 'Telefone',
      descricao: '(31) 9884455-7733'
    },
    {
      titulo: 'Gênero',
      descricao: 'Feminino CIS'
    }
  ],
  camposDireita: [
    {
      titulo: 'Data de nascimento',
      descricao: 'beatriz-soares@gmail.com'
    },
    {
      titulo: 'Cidade',
      descricao: 'Belo Horizonte'
    },
    {
      titulo: 'Raça / Cor',
      descricao: 'Parda'
    }
  ]
};

const dadosInformacoesLegais =
{
  titulo: 'Informações legais',
  camposEsquerda: [
    {
      titulo: 'Número do BO',
      descricao: '123456'
    },
    {
      titulo: 'Número do processo',
      descricao: '98844557733'
    }
  ],
  camposDireita: [
    {
      titulo: 'Categoria do crime no BO',
      descricao: 'Gbasndiiqdn'
    },
    {
      titulo: 'Orgão',
      descricao: 'Doamocmsco'
    }
  ]
};

const dadosAgressor =
{
  titulo: 'Dados do agressor',
  camposEsquerda: [
    {
      titulo: 'Nome',
      descricao: 'Beatriz Soares'
    },
    {
      titulo: 'Cidade',
      descricao: 'Belo Horizonte'
    },
    {
      titulo: 'Raça / Cor',
      descricao: 'Parda'
    }
  ],
  camposDireita: [
    {
      titulo: 'Data de nascimento',
      descricao: 'Abril 14, 1988'
    },
    {
      titulo: 'Gênero',
      descricao: 'Feminino CIS'
    }
  ]
};

export class VisualizarDenuncia extends Component {
  constructor(props) {
    super(props);

    console.log(props);
  }

  render() {
    return (
      <div className="receptaculo">
        <div className="titulo">
          Detahes da denúncia
        </div>
        <div className="detalhes">
          <div className="grade-superior">
            <GradeCampos dados={dadosDenunciante} />
            <GradeCampos dados={dadosVitima} />
          </div>
          <div className="grade-inferior">
            <GradeCampos dados={dadosInformacoesLegais} />
            <GradeCampos dados={dadosAgressor} />
          </div>
        </div>
      </div>
    );
  }
}

VisualizarDenuncia.propTypes = {
  detalhesDenuncia: PropTypes.object
};

function mapStateToProps(state) {
  return {
    detalhesDenuncia: state.detalhesDenuncia
  };
}

export default connect(mapStateToProps)(VisualizarDenuncia);
