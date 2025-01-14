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
        <Link to="/" className="button-nav">
          ACCUEIL
        </Link>
        <Link to="/personal-page" className="button-nav">
          PERSONAL'S PAGE
        </Link>
        <Link to="/mes-programmes" className="button-nav">
          MES PROGRAMMES
        </Link>
        <Link to="/events" className="button-nav">
          MES EVENEMENTS
        </Link>
        <Link to="/blog" className="button-nav">
          BLOG
        </Link>
        <Link to="/contacts" className="button-nav">
          CONTACTS
        </Link>
        <Link to="/faq-page" className="button-nav">
          FAQ
        </Link>
      </nav>
    </header>
  );
};

export default Header;
