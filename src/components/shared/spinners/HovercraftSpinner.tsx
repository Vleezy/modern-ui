import React from "react";

interface IHovercraftSpinnerProps {
  text?: string;
}
const HovercraftSpinner = (props: IHovercraftSpinnerProps) => {
  const { text } = props;

  return (
    <div
      className="w-20 h-20 bg-center bg-no-repeat mx-auto flex justify-center"
      style={{ backgroundImage: `url(/assets/images/hovercraft.png)` }}
      id="hovercraft-loading"
    >
      {text && (
        <p className="bottom-0 mt-auto text-center whitespace-no-wrap text-gray-500 text-xs">
          {text}
        </p>
      )}
    </div>
  );
};

export default HovercraftSpinner;
