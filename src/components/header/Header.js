import React, { useState } from "react";
import HeaderNav from "./HeaderNav";
import SearchBar from "./SearchBar";

const Header = (props) => {
  const [searchOpen, setSearchOpen] = useState(false);

  const toggleSearchBar = () => {
    setSearchOpen((searchOpen) => !searchOpen);
  };

  return (
    <div className="main-header">
      {searchOpen ? (
        <SearchBar toggleSearch={toggleSearchBar} changeStr={props.changeStr} />
      ) : (
        <HeaderNav toggleSearch={toggleSearchBar} />
      )}
    </div>
  );
};

export default Header;
