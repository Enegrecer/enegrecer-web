import React from 'react';
import { withHistoryPropTypes } from './sharedPropTypes';
import './css/home.css';

const Home = () => (
  <div>
    <div id="banner">
      <div id="banner__blur" />
    </div>
  </div>
);

Home.propTypes = withHistoryPropTypes();

export default Home;
