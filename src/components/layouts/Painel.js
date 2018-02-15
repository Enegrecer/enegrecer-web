import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import { IconButton, Drawer, MenuItem } from 'material-ui';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

class Painel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };

    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle() {
    this.setState({ open: !this.state.open });
  }

  render() {
    return (
      <div>
        <AppBar
          title="Enegrecer"
          onLeftIconButtonClick={this.handleToggle}
        />

        <Drawer
          docked={false}
          open={this.state.open}
          onRequestChange={open => this.setState({ open })}
        >
          <AppBar
            iconElementLeft={<IconButton><NavigationClose /></IconButton>}
            title="Enegrecer"
            onLeftIconButtonClick={this.handleToggle}
          />
          <Link to="/"><MenuItem>Home</MenuItem></Link>
          <Link to="/painel/categorias"><MenuItem>Categorias</MenuItem></Link>
          <Link to="/painel/denuncias/nova"><MenuItem>Criar Denúncia</MenuItem></Link>
        </Drawer>

        {this.props.children}
      </div>
    );
  }
}

Painel.propTypes = {
  children: PropTypes.object.isRequired,
};

export default Painel;
