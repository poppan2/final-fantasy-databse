import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <nav className="nav-bar">
        <Link to='/'><div>
          <i className="fas fa-home fa-2x icon"></i>
          <p>Home</p>
        </div></Link>
        <Link to='/characters'><div>
          <i className="fas fa-id-card fa-2x icon"></i>
          <p>Characters</p>
        </div></Link>
        <Link to='/monsters'><div>
          <i className="fab fa-optin-monster fa-2x icon"></i>
          <p>Monsters</p>
        </div></Link>
        <Link to='/games'><div>
          <i className="fas fa-gamepad fa-2x icon"></i>
          <p>Games</p>
        </div></Link>
      </nav>
    </div>
  );
};

export default Footer;
