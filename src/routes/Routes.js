import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import HomePage from '../components/home/Home';
import Navbar from '../components/navbar/Navbar';
import Rodape from '../components/rodape/Rodape';
import Sobre from '../components/sobrePortal/Sobre';
import ColetivoEnegrecer from '../components/sobreColetivo/ColetivoEnegrecer';
import NovaDenunciaContainer from '../containers/denuncias/NovaDenunciaContainer';
import DepoisDaDenuncia from '../components/depoisdadenuncia/DepoisDaDenuncia';
import ModeradorLogin from '../components/moderador/ModeradorLogin';
import PaginaNaoEncontrada from '../components/paginaNaoEncontrada/PaginaNaoEncontrada';
import PainelModerador from '../components/moderador/painelModerador';
import MenuModerador from '../components/moderador/menuModerador';
import { estaAutenticado } from '../utils/firebaseUtils';
import PrivateRoute from './PrivateRoute';
import VisualizarDenunciaContainer from '../containers/denuncias/VisualizarDenunciaContainer';

const Routes = () => (
  <BrowserRouter>
    <div>
      {estaAutenticado() ? <MenuModerador /> : <Navbar />}
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/sobre" component={Sobre} />
        <Route exact path="/coletivo-enegrecer" component={ColetivoEnegrecer} />
        <Route exact path="/denunciar" component={NovaDenunciaContainer} />
        <Route exact path="/depois-denuncia" component={DepoisDaDenuncia} />
        <Route exact path="/login" component={ModeradorLogin} />
        <Route exact path="/moderador/visualizar-denuncia/:denunciaId" component={VisualizarDenunciaContainer} />
        <PrivateRoute path="/moderador" component={PainelModerador} />

        <Route component={PaginaNaoEncontrada} />
      </Switch>
      <Rodape />
    </div>
  </BrowserRouter>
);

export default Routes;
