import React from 'react';

const Home = () => (
  <div id="banner">
    <div id="banner__blur" />

    <div className="container">
      <div className="en-topbar">
        <span className="en-brand">Enegrecer</span>

        <div className="en-topbar__right">
          <nav className="en-nav">
            <a className="en-extra-margin-right" href="">Sobre</a>
            <a className="en-btn en-btn--outline en-btn--primary" href="">Registrar / Entrar</a>
          </nav>
        </div>
      </div>

      <div className="row">
        <div className="col-md-4">
          <div className="en-subtitle--primary">LOREM IPSUM SIT</div>
          <div className="en-title en-title--light en-title--marker">LOREM IPSUM CONSECTETUR</div>
          <p id="en-banner__description" className="en-text--light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <a href="" className="en-btn en-btn--colored">Denunciar Racismo</a>
        </div>
      </div>
    </div>
  </div>
);

export default Home;
