import React from "react";
import { Link } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LiveTvIcon from "@material-ui/icons/LiveTv";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import FlashOnIcon from "@material-ui/icons/FlashOn";

const HeaderIcons = (props) => (
  <>
    <div className="header-icon">
      <span onClick={props.handleClick}>
        <HomeIcon />
        <p>Home</p>
      </span>
    </div>
    <div className="header-icon">
      <span>
        <FlashOnIcon />
        <p>Trending</p>
      </span>
    </div>
    <div className="header-icon">
      <span>
        <LiveTvIcon />
        <p>Verified</p>
      </span>
    </div>
    <div className="header-icon">
      <span>
        <VideoLibraryIcon />
        <p>Collections</p>
      </span>
    </div>
    <div className="header-icon" onClick={props.toggleSearch}>
      <span onClick={props.navigate}>
        <SearchIcon />
        <p>Search</p>
      </span>
    </div>
    <div className="header-icon">
      <span>
        <PersonOutlineIcon />
        <p>Account</p>
      </span>
    </div>
  </>
);

export default HeaderIcons;
