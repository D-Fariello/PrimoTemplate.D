import React from "react";
import { NavLink, Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="logoImage">
        <NavLink to="/" className="mainNavLogo">
          <img
            src="./images/LogoColored.png"
            alt="Logo web"
            className="mainNavLogo-image"
          />
        </NavLink>
      </div>
      <nav className="main-nav">
        <Link to="/top" className="button-nav">
          ACCUEIL
        </Link>
        <Link to="/#" className="button-nav">
          PERSONAL'S PAGE
        </Link>
        <Link to="/#" className="button-nav">
          MES PROGRAMMES
        </Link>
        <Link to="/#" className="button-nav">
          MES EVENEMENTS
        </Link>
        <Link to="/#" className="button-nav">
          BLOG
        </Link>
        <Link to="/#" className="button-nav">
          CONTACTS
        </Link>
        <Link to="/#" className="button-nav">
          FAQ
        </Link>
      </nav>
    </header>
  );
};

export default Header;
