import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import logo from "./ff-logo.jpg";

const Header = () => {
  return (
    <header className="header-nav">
      <nav className="hnav-bar">
        <Link to="/final-fantasy-databse">
          <div>
            <i className="fas fa-home fa-2x hicon"></i>
            <p>Home</p>
          </div>
        </Link>
        <Link to="/final-fantasy-databse/characters">
          <div>
            <i className="fas fa-id-card fa-2x hicon"></i>
            <p>Characters</p>
          </div>
        </Link>
        <div className="ff-logo">
          <Link to="/final-fantasy-databse">
            <img alt="ff-logo" src={logo} />
          </Link>
        </div>
        <Link to="/final-fantasy-databse/monsters">
          <div>
            <i className="fab fa-optin-monster fa-2x hicon"></i>
            <p>Monsters</p>
          </div>
        </Link>
        <Link to="/final-fantasy-databse/games">
          <div>
            <i className="fas fa-gamepad fa-2x hicon"></i>
            <p>Games</p>
          </div>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
