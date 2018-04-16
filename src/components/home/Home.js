import React from 'react';
import Estatistica from '../estatistica/Estatistica';
import DenunciarHome from './DenunciarHome';
import { withHistoryPropTypes } from './sharedPropTypes';
import './css/home.css';

const Home = () => (
  <div className="row">
    <div className="col s12 m6" id="banner">
      <div className="AT-QUANDO-VOC-VAI">
      Até quando você vai se esconder?
      </div>
    </div>
    <Estatistica />
    <DenunciarHome />
  </div>
);

Home.propTypes = withHistoryPropTypes();

export default Home;
