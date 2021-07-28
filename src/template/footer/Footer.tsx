import React from "react";
import PageCentre from "./../../components/PageCentre/PageCentre";

import FacebookIcon from "../../media/images/facebook-icon.png";
import InstagramIcon from "../../media/images/instagram-icon.png";
import TwitterIcon from "../../media/images/twitter-icon.png";

import "./footer.scss";

const Footer = () => {
  return (
    <footer>
      <PageCentre>
        <div className="footer-main-block">
          <div className="logo">
            <a href="/">
              <span>FUN</span> WEATHER.
            </a>
          </div>
          <div className="links">
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">Features</a>
              </li>
              <li>
                <a href="/">Reviews</a>
              </li>
              <li>
                <a href="/">Download</a>
              </li>
            </ul>
          </div>
          <div className="icons">
            <div className="icon-item">
              <a href="/">
                <img alt="facebook icon" src={FacebookIcon} />
              </a>
            </div>
            <div className="icon-item">
              <a href="/">
                <img alt="instagram icon" src={InstagramIcon} />
              </a>
            </div>
            <div className="icon-item">
              <a href="/">
                <img alt="twitter icon" src={TwitterIcon} />
              </a>
            </div>
          </div>
          <div className="image"></div>
        </div>
      </PageCentre>
      <div className="footer-devider-wrapper">
        <div className="footer-devider"></div>
      </div>
      <PageCentre>
        <div className="footer-rights">
          © 2016 All rights reserved. Weather App Theme by Gravpix
        </div>
      </PageCentre>
    </footer>
  );
};

export default Footer;
