import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
// import BackDrop from "../backdrop/BackDrop";

const SearchBar = (props) => {
  const [value, setValue] = useState("");
  let history = useHistory();

  const handleChange = (e) => {
    setValue(e.target.value);
    props.changeStr(e.target.value);
    if (e.target.value === "") history.push(`/`);
    else if (history.location.pathname !== "/searchresults")
      history.push("/searchresults");
  };

  return (
    <>
      <div className="search-bar">
        <div className="close-search-icon">
          <span onClick={props.toggleSearch}>
            <ArrowBackIcon />
          </span>
        </div>
        <div className="input-bar">
          <TextField rowsMax={10} value={value} onChange={handleChange} />
        </div>
      </div>
      {/* <BackDrop /> */}
    </>
  );
};

export default SearchBar;
