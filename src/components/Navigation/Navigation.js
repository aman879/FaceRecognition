import React from "react";
import Tilt from "react-parallax-tilt";
import berserk from "./berserk.png";
import "./Logo.css";

const Navigation = () => {
  return (
    <nav className="navigation">
      <div className="logo-container">
        <Tilt className="Tilt br2" style={{ height: 90, width: 90 }}>
          <img alt="logo" src={berserk} className="logo-img" />
        </Tilt>
      </div>
      <div className="sign-out-container">
        <p className="f3 link dim white pa3 pointer ">Sign out</p>
      </div>
    </nav>
  );
};

export default Navigation;
