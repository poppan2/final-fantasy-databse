import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import logo from './ff-logo.jpg'

const Header = () => {

  
  return (
    <header className="header-nav">
      <div className="ff-logo">
        <Link to="/">
          <img alt='ff-logo' src={logo} />
        </Link>
      </div>
    </header>
  );
};

export default Header;
