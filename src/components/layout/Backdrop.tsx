import React from "react";

interface IBackdropProps {
  callback?: (bool: boolean) => void;
}

const Backdrop = (props: IBackdropProps) => {
  const { callback } = props;

  return (
    <div
      onClick={() => callback && callback(false)}
      className="w-full z-40 fixed top-0 left-0 h-screen"
      style={{
        // ...backdropStyle,
        // ...backdropTransitionStyles,
        backgroundColor: "rgba(0, 0, 0, 0.3)"
      }}
    ></div>
  );
};

export default Backdrop;
