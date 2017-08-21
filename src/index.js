import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './index.css';
import App from './components/App';
import registerServiceWorker from './utils/registerServiceWorker';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';

const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(reducers, reduxDevTools);

// Needed for onTouchTap
injectTapEventPlugin();

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
      <App />
    </MuiThemeProvider>
  </Provider>
  ,
  document.getElementById('root')
);

registerServiceWorker();
