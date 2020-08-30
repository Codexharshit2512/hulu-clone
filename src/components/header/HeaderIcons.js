import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LiveTvIcon from "@material-ui/icons/LiveTv";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import FlashOnIcon from "@material-ui/icons/FlashOn";

const HeaderIcons = (props) => (
  <>
    <div className="header-icon">
      <HomeIcon />
      <p>Home</p>
    </div>
    <div className="header-icon">
      <FlashOnIcon />
      <p>Trending</p>
    </div>
    <div className="header-icon">
      <LiveTvIcon />
      <p>Verified</p>
    </div>
    <div className="header-icon">
      <VideoLibraryIcon />
      <p>Collections</p>
    </div>
    <div className="header-icon" onClick={props.toggleSearch}>
      <SearchIcon />
      <p>Search</p>
    </div>
    <div className="header-icon">
      <PersonOutlineIcon />
      <p>Account</p>
    </div>
  </>
);

export default HeaderIcons;
