import React from "react";

const HovercraftSpinner = () => {
  return (
    <div
      className="w-20 h-20 bg-center bg-no-repeat"
      style={{ backgroundImage: `url(/assets/images/hovercraft.png)` }}
      id="hovercraft-loading"
    ></div>
  );
};

export default HovercraftSpinner;
