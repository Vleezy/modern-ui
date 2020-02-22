import React, { useState } from "react";
import Backdrop from "../Backdrop";

const Modal = () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      {visible && (
        <>
          <div className="absolute">Test</div>
          <Backdrop callback={() => setVisible(false)} />
        </>
      )}
    </>
  );
};

export default Modal;
