import React from 'react';
import { withHistoryPropTypes } from './sharedPropTypes';
import './css/home.css';

const Home = () => (
  <div id="banner">
    <div class="AT-QUANDO-VOC-VAI">
      Até quando você vai se esconder?
    </div>
</div>
);

Home.propTypes = withHistoryPropTypes();

export default Home;
