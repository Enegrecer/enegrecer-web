import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Rotas from './Rotas';


const App = () => (
  <BrowserRouter hideNavBar>
    <Rotas />
  </BrowserRouter>
);

export default App;
