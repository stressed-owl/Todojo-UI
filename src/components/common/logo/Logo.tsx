import React from "react";
import logo from "../../../assets/icons/app-logo-64px.png";
import "./scss/Logo.css";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="logo-link">
      <div className="logo-wrapper">
        <img className="logo-icon" src={logo} alt="Logo icon" />
        <p className="logo-app-name">Todojo</p>
      </div>
    </Link>
  );
};

export default Logo;
