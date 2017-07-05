import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './index.css';
import App from './components/App';
import registerServiceWorker from './utils/registerServiceWorker';
// ReactDOM.render(<App />, document.getElementById('root'));



ReactDOM.render(
    <MuiThemeProvider>
        <App />
    </MuiThemeProvider>,
  document.getElementById('root')
);

registerServiceWorker();
