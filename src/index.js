import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';

import configureStore from './store';
import Rotas from './routes/Routes'
import registerServiceWorker from './utils/registerServiceWorker';

import './assets/styles/index.css';

// Needed for onTouchTap
injectTapEventPlugin();

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
      <Rotas />
    </MuiThemeProvider>
  </Provider>
  ,
  document.getElementById('root'),
);

registerServiceWorker();
