import React, { useState } from "react";
import FacebookIcon from "../../media/images/facebook-icon.png";
import InstagramIcon from "../../media/images/instagram-icon.png";
import TwitterIcon from "../../media/images/twitter-icon.png";
import "./header.scss";

const Header = () => {
  const [menuShow, setMenuShow] = useState<boolean>(false);

  return (
    <header>
      <div className="header-center">
        <div className="logo">
          <a href="/">FUN WEATHER.</a>
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
        <div
          className="mobile-menu-button"
          onClick={() => setMenuShow(!menuShow)}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div className={"mobile-menu " + (menuShow ? "show" : "")}>
        <div className="mobile-menu-links">
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
        <div className="mobile-menu-devider"></div>
        <div className="mobile-menu-socials">
          <div className="mobile-menu-icon">
            <a href="/">
              <img alt="facebook icon" src={FacebookIcon} />
            </a>
          </div>
          <div className="mobile-menu-icon">
            <a href="/">
              <img alt="instagram icon" src={InstagramIcon} />
            </a>
          </div>
          <div className="mobile-menu-icon">
            <a href="/">
              <img alt="twitter icon" src={TwitterIcon} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
