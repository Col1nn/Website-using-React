import React from "react";
import { Link } from "react-router-dom";
import { SiAffinitydesigner } from "react-icons/si";
import "../styles/Navigation.css";

const Navigation = () => {
  return (
    <nav className="navigation">
      <div className="navigation-container">
        <Link to="/" className="navigation-logo">
          VOYAGE <SiAffinitydesigner className="logo" />
        </Link>
        <ul className="navigation-menu">
          <li className="navigation-item">
            <Link to="/" className="navigation-links">
              Home
            </Link>
          </li>
          <li className="navigation-item">
            <Link to="/FaQ" className="navigation-links">
              FaQ
            </Link>
          </li>
          <li className="navigation-item">
            <Link to="/SocialProof" className="navigation-links">
              Social Proof
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
