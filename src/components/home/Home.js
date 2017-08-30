import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export class Home extends React.PureComponent {
  render() {
    let userInfo;

    if (this.props.auth.logged) {
      userInfo = <div>Meu usuário é: {this.props.auth.user.email} </div>;
    }

    return (
      <div id="home">
        {userInfo}
        <h1>Enegrecer</h1>
        <Link to="/categorias">Categorias</Link>
      </div>

    );
  }
}

Home.propTypes = {
  auth: PropTypes.shape({
    logged: PropTypes.bool,
    user: PropTypes.shape({
      email: PropTypes.string,
    }),
  }).isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(
  mapStateToProps,
)(Home);
