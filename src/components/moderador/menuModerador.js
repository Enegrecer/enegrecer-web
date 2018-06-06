import React from 'react';
import { auth, storageKey } from '../../utils/firebaseUtils';

const divStyle = {
  backgroundColor: 'white',
};

function logout() {
  auth.signOut().then(() => {
    window.localStorage.removeItem(storageKey);
    window.location.href = '/login';
  });
}

const MenuModerador = () => (
  <div style={divStyle}>
    <h1>AQUI SERA CONSTRUIDO O MENU DO MODERADOR</h1>
    <input type="button" value="Logout" onClick={logout} />
  </div>
);

export default MenuModerador;
