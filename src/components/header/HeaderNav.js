import React from "react";
import { useHistory } from "react-router-dom";
import HeaderIcons from "../header/HeaderIcons";
import hulu from "../../images/hulu-logo-white.png";

const HeaderNav = (props) => {
  let history = useHistory();

  const handleHomeClick = () => history.replace("/");

  return (
    <div className="header-container">
      <div className="header-icons">
        <HeaderIcons
          toggleSearch={props.toggleSearch}
          navigate={props.navigate}
          handleClick={handleHomeClick}
        />
      </div>
      <div className="logo">
        <img src={hulu} alt="hulu logo" />
      </div>
    </div>
  );
};

export default HeaderNav;
