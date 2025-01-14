import React from "react";
import { NavLink, Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footerSection">
      <div className="footerContainer">
        <div className="logoImage">
          <NavLink to="/" className="mainNavLogo">
            <img
              src="./images/LogoColored.png"
              alt="Logo web"
              className="mainNavLogo-image"
            />
          </NavLink>
          <p className="aboutMe">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            perferendis repellat molestias in dolores qui sunt quia deleniti
            dolorem? Maxime officiis fuga ut minus!
          </p>
        </div>
        <nav className="main-nav">
          <Link to="/" className="button-nav">
            Menu
          </Link>
          <Link to="/contacts" className="button-nav">
            Contacts
          </Link>
          <Link to="/mes-programmes" className="button-nav">
            MES PROGRAMMES
          </Link>
          <Link to="/#" className="button-nav">
            Service Client
          </Link>
          <Link to="/#" className="button-nav">
            BLOG
          </Link>
          <Link to="/#" className="button-nav">
            Mentions Légales
          </Link>
          <Link to="/#" className="button-nav">
            FAQ
          </Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
