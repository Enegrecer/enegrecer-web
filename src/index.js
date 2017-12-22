import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { createStore, applyMiddleware, compose } from 'redux';

import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';

import registerServiceWorker from './utils/registerServiceWorker';

import reducers from './reducers';
import rootSaga from './sagas';
import './assets/styles/index.css';

import App from './components/App'


const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = composeEnhancers(applyMiddleware(sagaMiddleware));
const store = createStore(reducers, middlewares);
sagaMiddleware.run(rootSaga);

// Needed for onTouchTap
injectTapEventPlugin();

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
      <App />
    </MuiThemeProvider>
  </Provider>
  ,
  document.getElementById('root'),
);

registerServiceWorker();
