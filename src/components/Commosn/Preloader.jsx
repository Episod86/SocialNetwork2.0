import React from "react";

import preloader from "../../image/loading.gif";

const Preloader = (props) => {
  return (
    <div>
      <img src={preloader} alt="" />
    </div>
  );
};

export default Preloader;
