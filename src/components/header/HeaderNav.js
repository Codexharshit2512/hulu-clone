import React from "react";
import HeaderIcons from "../header/HeaderIcons";
import hulu from "../../images/hulu-logo-white.png";

const HeaderNav = (props) => {
  return (
    <div className="header-container">
      <div className="header-icons">
        <HeaderIcons toggleSearch={props.toggleSearch} />
      </div>
      <div className="logo">
        <img src={hulu} alt="hulu logo" />
      </div>
    </div>
  );
};

export default HeaderNav;
