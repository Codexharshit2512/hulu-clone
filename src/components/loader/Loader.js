import React from "react";
import ReactLoading from "react-loading";

const Loader = () => {
  return (
    <div className="container d-flex justify-content-center loader-container">
      <ReactLoading type="spokes" color="white" height={"7%"} width={"7%"} />
    </div>
  );
};

export default Loader;
