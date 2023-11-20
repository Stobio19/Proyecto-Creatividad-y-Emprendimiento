import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../App.css"; 

export const Header = () => {
  return (
    <div className="Header">
      <nav className="nav-before-header">
        <div className="content-before-nav-header">
          <FontAwesomeIcon icon={faEnvelope} />
          <span>Info@company.com</span>
          <FontAwesomeIcon icon={faPhone} />
          <span>01-800-9955</span>
        </div>
      </nav>
      <div className="main-content-header">
        <nav className="nav">
          <Link className="link-header" to="/">
            Home
          </Link>
          <Link className="link-header" to="/about-us">
            About Us
          </Link>
          <Link className="link-header" to="/storage">
            Storage
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Header;
