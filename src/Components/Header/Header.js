import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = (props) => {

  
  return (
    <header className="header-nav">
      <div>
        <Link to="/">
          <i className="fas fa-home fa-2x header-icon"></i>
        </Link>
        
      </div>
    </header>
  );
};

export default Header;
