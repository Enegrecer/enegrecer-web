import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './index.css';
import App from './components/App';
import registerServiceWorker from './utils/registerServiceWorker';
import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
injectTapEventPlugin();

ReactDOM.render(
    <MuiThemeProvider>
        <App />
    </MuiThemeProvider>,
  document.getElementById('root')
);

registerServiceWorker();
