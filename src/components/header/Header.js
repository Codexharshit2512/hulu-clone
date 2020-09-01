import React, { useState, useRef } from "react";
import { useHistory, useLocation } from "react-router-dom";
import HeaderNav from "./HeaderNav";
import SearchBar from "./SearchBar";

const Header = (props) => {
  const [searchOpen, setSearchOpen] = useState(false);
  let searchRef = useRef();

  const history = useHistory();
  const location = useLocation();

  const toggleSearchBar = (e) => {
    setSearchOpen((searchOpen) => !searchOpen);
    if (location.pathname === "/searchresults") history.replace("/");
  };

  const navigate = () => {
    if (window.innerWidth < 450) {
      setTimeout(() => {
        searchRef.current.scrollIntoView({ behavior: "smooth" });
      }, 1);
    }
  };

  return (
    <div className="main-header">
      {searchOpen ? (
        <SearchBar
          ref={searchRef}
          toggleSearch={toggleSearchBar}
          changeStr={props.changeStr}
        />
      ) : (
        <HeaderNav toggleSearch={toggleSearchBar} navigate={navigate} />
      )}
    </div>
  );
};

export default Header;
