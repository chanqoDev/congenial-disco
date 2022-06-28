import React from 'react';
import { Link } from 'react-router-dom';
import logodark from '../../assets/logo/logo_dark.png';
import logofooter from '../../assets/logo/logo2.png';
const Footer = () => {
  return (
    <div>
      <footer id="footer" className="footer-light-style clearfix bg-style">
        <div className="themesflat-container">
          <div className="row">
            <div className="col-lg-3 col-md-12 col-12">
              <div className="widget widget-logo">
                <div className="logo-footer" id="logo-footer">
                  <h1> hello </h1>
                  <Link to="/">
                    <img
                      className="logo-dark"
                      id="logo_footer"
                      src={logodark}
                      alt="nft-gaming"
                    />
                    <h1> hello</h1>
                    <img
                      className="logo-light"
                      id="logo_footer"
                      src={logofooter}
                      alt="nft-gaming"
                    />
                  </Link>
                </div>
                <p className="sub-widget-logo">
                  {' '}
                  ieownapoi oawinf asdfasdf asdfasdfasdfasdfas
                </p>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-5 col-5">
              <div className="widget widget-menu style-1">
                <h5 className="title-widget">My Account</h5>
                <ul>
                  <li>Projects</li>
                  <li>REcents</li>
                  <li>New New Bro</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-7 col-7">
              <div className="widget widget-menu style-2">
                <h5 className="title-widget">Resources</h5>
                <ul>
                  <li> One </li>
                  <li> big</li>
                  <li>dream</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-5 col-5"></div>
            <div className="col-lg-3 col-md-6 col-sm-7 col-12"></div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
