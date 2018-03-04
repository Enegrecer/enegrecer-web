import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const Painel = props => (
  <div>
    <nav>
      <div className="nav-wrapper">
        <ul id="nav-mobile" className="left hide-on-med-and-down">
          <li> <Link to="/">Home</Link></li>
          <li> <Link to="/painel/denuncias/nova">Criar Denúncia</Link></li>
        </ul>
      </div>
    </nav>
    {props.children}
  </div>
);

Painel.propTypes = {
  children: PropTypes.element.isRequired
};

export default Painel;
