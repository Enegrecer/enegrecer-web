import React, { Component } from 'react';
import './visualizarDenuncia.css';
import SeparadorPontilhado from '../comum/separadorPontilhado/SeparadorPontilhado';
import { CamposVisualizarDenuncia } from '../comum/camposVisualizarDenuncia/CamposVisualizarDenuncia';

export default class VisualizarDenuncia extends Component {
  componentWillMount() {
  }

  render() {
    return (
      <div className="receptaculo">
        <div className="titulo">
          Detahes da denúncia
        </div>
        <div className="detalhes">
          <div>
            <div>
              Dados do denunciante
              <SeparadorPontilhado />
              <div className="grade">
                <div>
                  <CamposVisualizarDenuncia
                    titulo={'Nome denunciante'}
                    descricao={'Beatriz Soares'}
                  />
                  <CamposVisualizarDenuncia
                    titulo={'Telefone'}
                    descricao={'(31) 9884455-7733'}
                  />
                  <CamposVisualizarDenuncia
                    titulo={'Gênero'}
                    descricao={'Feminino CIS'}
                  />
                  <CamposVisualizarDenuncia
                    titulo={'Raça / Cor'}
                    descricao={'Parda'}
                  />
                </div>
                <div>
                  <CamposVisualizarDenuncia
                    titulo={'Email'}
                    descricao={'beatriz-soares@gmail.com'}
                  />
                  <CamposVisualizarDenuncia
                    titulo={'Cidade'}
                    descricao={'Belo Horizonte'}
                  />
                  <CamposVisualizarDenuncia
                    titulo={'Data de nascimento'}
                    descricao={'Abril 14, 1988'}
                  />
                </div>
              </div>
            </div>
            <div>
              Informações legais
              <SeparadorPontilhado />
              <div className="grade">
                <div>
                  <CamposVisualizarDenuncia
                    titulo={'Número do BO'}
                    descricao={'123456'}
                  />
                  <CamposVisualizarDenuncia
                    titulo={'Número do processo'}
                    descricao={'98844557733'}
                  />
                </div>
                <div>
                  <CamposVisualizarDenuncia
                    titulo={'Categoria do crime no BO'}
                    descricao={'Gbasndiiqdn '}
                  />
                  <CamposVisualizarDenuncia
                    titulo={'Orgão'}
                    descricao={'Doamocmsco'}
                  />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div>
              Dados da vítima
              <SeparadorPontilhado />
              <div className="grade">
                <div>
                  <CamposVisualizarDenuncia
                    titulo={'Nome'}
                    descricao={'Beatriz Soares'}
                  />
                  <CamposVisualizarDenuncia
                    titulo={'Telefone'}
                    descricao={'(31) 9884455-7733'}
                  />
                  <CamposVisualizarDenuncia
                    titulo={'Gênero'}
                    descricao={'Feminino CIS'}
                  />
                </div>
                <div>
                  <CamposVisualizarDenuncia
                    titulo={'Data de nascimento'}
                    descricao={'Abril 14, 1988'}
                  />
                  <CamposVisualizarDenuncia
                    titulo={'Cidade'}
                    descricao={'Belo Horizonte'}
                  />
                  <CamposVisualizarDenuncia
                    titulo={'Raça / Cor'}
                    descricao={'Parda'}
                  />
                </div>
              </div>
            </div>
            <div>
              Dados do agressor
              <SeparadorPontilhado />
              <div className="grade">
                <div>
                  <CamposVisualizarDenuncia
                    titulo={'Nome'}
                    descricao={'Beatriz Soares'}
                  />
                  <CamposVisualizarDenuncia
                    titulo={'Cidade'}
                    descricao={'Belo Horizonte'}
                  />
                  <CamposVisualizarDenuncia
                    titulo={'Raça / Cor'}
                    descricao={'Parda'}
                  />
                </div>
                <div>
                  <CamposVisualizarDenuncia
                    titulo={'Data de nascimento'}
                    descricao={'Abril 14, 1988'}
                  />
                  <CamposVisualizarDenuncia
                    titulo={'Gênero'}
                    descricao={'Feminino CIS'}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="classificacao">
          Classifique a denúncia 2
        </div>
      </div>
    );
  }
}
