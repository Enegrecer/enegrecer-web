import React from 'react';
import logo from '../../imagens/logo.svg';
import { auth, storageKey } from '../../utils/firebaseUtils';
import './menu-moderador.css';

function logout() {
  auth.signOut().then(() => {
    window.localStorage.removeItem(storageKey);
    window.location.href = '/login';
  });
}

const MenuModerador = () => (
  <div className="menu-container">
    <img src={logo} alt="Logo Verdade Seja Dita" />
    <input type="button" value="Sair" onClick={logout} />
  </div>
);

export default MenuModerador;
