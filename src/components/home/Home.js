import React from 'react';
import Logo from './../Logo';
import Nav from './../Nav';
import Topbar from './../Topbar';

const Home = () => (
  <div id="banner">
    <div id="banner__blur" />

    <div className="container">
      <Topbar
        leftComponent={<Logo />}
        rightComponent={<Nav />}
      />

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
