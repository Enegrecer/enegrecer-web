import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from './../components/App';


export default class Routes extends Component {
  
    render() {
      return (
        <BrowserRouter>
          <App />
        </BrowserRouter>
      );
    }
  }

